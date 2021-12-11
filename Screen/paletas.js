import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import  Constants  from 'expo-constants';
import { ScrollView } from 'react-native-gesture-handler';

const paletas =({navigation}) => {
  
        return (
            <View style={[styles.container]}>
                
                <View style={{flex:1}, styles.container}>
                <Text style={styles.paragraph}>En este apartado encontraras recetas de paletas</Text>
                
                </View>
                <View style={{flex:1}}>
                    <Image
                        style={styles.logo}
                        source={{ uri:"https://t2.rg.ltmcdn.com/es/images/2/2/8/manzanas_con_chamoy_74822_orig.jpg" }}
                    />
                </View>
                
              <View style={{flex:1}}>
            
                  <View   style={styles.paragraph}>
                        
                  </View>
                    <View style={styles.paragraph}>
                            <Button
                                color="#9B66A6"
                                title="Paleta de manzana"
                                onPress={()=>navigation.navigate('Paletademanzana')}
                            />
                    </View>
                </View>
               
            </View>
        )
    }
export default paletas
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#DF5DB6',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paragraph: {
        margin: 24,
        marginTop: 10,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      logo: {
        width: 200,
        height: 200,
      }
  });
  