

import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native'
import  Constants  from 'expo-constants';

const Panelote =({navigation}) => {
  
        return (
            <ScrollView>
                <View style={[styles.container]}>
                 <View >
                   <Text style={styles.asd}> Receta Pan de Elote </Text>
                </View>
                <View >
                  <Text style={styles.paragraph}>Ingredientes </Text>
                  <Text style={styles.ingred}>4 elotes</Text>
                  <Text style={styles.ingred}>1 taza de harina de arroz</Text>
                  <Text style={styles.ingred}>4 huevos </Text>
                  <Text style={styles.ingred}>2/3 de taza de azúcar </Text>
                  <Text style={styles.ingred}>125gms de Mantequilla</Text>
                  <Text style={styles.ingred}>1pizca de sal </Text>
                  <Text style={styles.ingred}>1/2 taza de leche </Text>
                  <Text style={styles.ingred}>1 molde del #10 engrasado o con papel encerado</Text>
                </View>
                <View >
                <Text style={styles.paragraph}>Preparacion </Text>
                  <Text style={styles.texto}>
                  Hay que cernir en un bowl harina royal y sal. Aparte separamos las yemas de las claras. Ponemos en la liquidarlos elotes con la media taza de leche. Aparte batimos la mantequilla con el azúcar e incorporamos las yemas una a una después agregamos poco a poco los ingredientes secos cernidos enseguida agregamos los elotes licuados en leche *Batimos las claras a punto de turrón y con movimientos envolventes mezclamos con el otro batido vertimos al molde y horneamos por aproximadamente 45 min. A 180°C o 350°F
                  </Text>
                  <Text></Text>
                </View>
                
              <View>
                        
              </View>
            </View>
            </ScrollView>
            
        )
    }
export default Panelote
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F5B7B1',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paragraph: {
          margin: 2,
          marginTop: 2,
          fontSize: 35,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        asd: {
          margin: 2,
          marginTop: 2,
          fontSize: 45,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        texto:{
          margin: 2,
          marginTop: 2,
          fontSize: 22,
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
        container2: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom:10,
        }

  });
  