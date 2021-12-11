import React, {useContext} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Button} from 'react-native-elements'
import {Picker} from '@react-native-picker/picker';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {AlumnosContext} from '../Context/AlumnosContext';
import Constants from 'expo-constants';
import firebase from '../Settings/ConfigFirebase'

const validations =Yup.object().shape({
    celular:Yup.number().typeError('Este campo es numérico').max(99999999,"Número muy grande").required('Obligatorio'),
    nombre:Yup.string().min(2,'Nombre muy corto').max(50,'Nombre muy largo').required('Obligatorio'),
    apellido: Yup.string().min(2,'Nombre muy corto').max(50,'Nombre muy largo').required('Obligatorio'),
    curso: Yup.string().nullable().required('Selecciona una curso')
})


export default function Formulario({route,navigation}){
    const {status} = route.params;
    const {alumno,lista,setAlumno,setLista}= useContext(AlumnosContext);

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Alumnos</Text>

            <Formik
                initialValues={alumno}
                onSubmit={(values,{resetForm})=>{
                     firebase.database().ref('Alumnos/'+alumno.celular).update(alumno).then(()=>{
                         alert("Enviado")
                     })
                    const temporal = lista.filter(al=>al.celular!=alumno.celular);//!==
                    //alert('enviado')
                    setLista([...temporal,alumno]);
                    resetForm({
                        celular:"",
                        nombre:"",
                        apellido:"",
                        curso:""
                    })
                    navigation.goBack();

                    console.log(lista) 
                }}
                validationSchema={validations}
                validate={(values)=>{
                    setAlumno(values)
                    console.log(alumno)
                }}
            >
            {
                ({handleChange, handleBlur, handleSubmit, setFieldValue, handleReset, errors, values})=>(
                    <View>
                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('celular')}
                            onBlur={handleBlur('celular')}
                            placeholder="Celular"
                            value={values.celular}
                            editable={status==="add"?true:false}
                        />
                        
                        {errors.celular && <Text style={styles.texterror}>{errors.celular}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('nombre')}
                            onBlur={handleBlur('nombre')}
                            placeholder="Nombre"
                            value={values.nombre}                        

                        />

                        {errors.nombre && <Text style={styles.texterror}>{errors.nombre}</Text>}

                        <TextInput
                            style={styles.textinput}
                            onChangeText={handleChange('apellido')}
                            onBlur={handleBlur('apellido')}
                            placeholder="Apellido"
                            value={values.apellido}                        

                        />      

                        {errors.apellido && <Text style={styles.texterror}>{errors.apellido}</Text>}       

                        <View style={styles.picker}>
                            <Picker
                                mode="dialog"
                                style={{height:40, backgroundColor:'white'}}
                                selectedValue={values.curso}
                                onValueChange={ (v)=>
                                    setFieldValue('curso',v)
                                }
                            >
                                <Picker.Item color="grey" label="curso" value="" />
                                <Picker.Item color="black" label="Pasteles" value="Pasteles"/>
                                <Picker.Item color="black" label="Paletas" value="Paletas"/>
                                <Picker.Item color="black" label="Galletas" value="Galletas"/>
                            </Picker>
                        </View>

                        {errors.curso && <Text style={styles.texterror}>{errors.curso}</Text>}

                        <View style={{marginTop:20}}>
                            <Button
                                buttonStyle={styles.buttons}
                                onPress={handleSubmit}
                                title="Enviar"
                            />

                            {
                                status==="add"
                                &&
                                <Button
                                buttonStyle={styles.buttons}
                                onPress={handleReset}
                                title="Limpiar"
                                />

                            }
                        


                        </View>

                    </View>
                )


            }    
                
            </Formik>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      margin:20,
      marginTop:Constants.statusBarHeight,
      backgroundColor:'#F2E95B'
   
    },
    texterror:{
      color:'red'
    },
    textinput:{
      borderRadius:10, 
      height: 40, 
      borderColor: '#D2B1EC', 
      borderWidth: 1, 
      margin:5, 
      paddingLeft:15, 
      backgroundColor:'white',
      elevation: 5,
    },
    buttons:{
      backgroundColor:'#E0776C', 
      color:'black', 
      marginTop:10, 
      borderRadius:10
    },
    header:{
      fontSize:20, 
      textAlign:'center', 
      marginBottom:40,
      color:'#650DAB'
    },
    picker:{
      margin:5, 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: '#D5B9EB', 
      overflow: 'hidden',
      elevation: 5,
    }
  
  });
  