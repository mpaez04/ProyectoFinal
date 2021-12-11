
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native'
import  Constants  from 'expo-constants';

const coricos =({navigation}) => {
  
        return (
          <ScrollView>
            <View style={[styles.container]}>
                 <View >
                   <Text style={styles.asd}> Receta de Coricos </Text>
                   <Image
                   style={styles.logo}
                   source={{ uri:"https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2019/02/receta-de-galletas-de-sonora.jpg" }}
                   />
                </View>
                <View >
                  <Text style={styles.paragraph}>Ingredientes </Text>
                  <Text style={styles.ingred}>1kilo de Maseca </Text>
                  <Text style={styles.ingred}>500 grs de manteca inca</Text>
                  <Text style={styles.ingred}>2 huevos </Text>
                  <Text style={styles.ingred}>2 picas de sal </Text>
                  <Text style={styles.ingred}>2 tazas de azúcar </Text>
                  <Text style={styles.ingred}>3 cdas de vainilla   </Text>
                </View>
                <View >
                <Text style={styles.paragraph}>Preparacion </Text>
                  <Text style={styles.texto}>
                  Se acrema la manteca y se le agrega el azúcar alternando con los huevos enseguida la vainilla y la pizca de sal, cuando este bien mezclado se agrega poco a poco la Maseca, se le pone agua para incorporar bien, la cantidad es según como se valla sintiendo la masa debe tener una textura manejable y no se rompa tan fácilmente
                  Nota: yo le agrego como 50grs más de manteca
                   </Text>
                  <Text></Text>
                </View>
                
              <View>
                        
              </View>
            </View>
          </ScrollView>
            
        )
    }
export default coricos
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#DFB4DE',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paragraph: {
          margin: 2,
          marginTop: 2,
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        asd: {
          margin: 2,
          marginTop: 2,
          fontSize: 40,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        texto:{
          margin: 2,
          marginTop: 2,
          fontSize: 20,
          fontWeight: 'normal',
          textAlign: 'left',
        },
        ingred:{
          margin: 2,
          marginTop: 2,
          fontSize: 20,
          fontWeight: 'normal',
          textAlign: 'left',
        },
        logo: {
          width: 230,
          height: 230,
        }

  });
  