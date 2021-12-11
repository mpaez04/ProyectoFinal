import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native'
import  Constants  from 'expo-constants';

const Paletademanzana =({navigation}) => {
  
        return (
            <ScrollView>
                <View style={[styles.container]}>
                 <View >
                   <Text style={styles.asd}> Receta de Paletas de ...</Text>
                   <Image
            style={styles.logo}
            source={{ uri:"https://i.pinimg.com/originals/84/66/fc/8466fcc74fee64630a529cf6de452471.jpg" }}
          />
                </View>
                <View >
                  <Text style={styles.paragraph}>Ingredientes </Text>
                  <Text style={styles.ingred}>. </Text>
                  <Text style={styles.ingred}>.</Text>
                  <Text style={styles.ingred}>. </Text>
                  <Text style={styles.ingred}>. </Text>
                  <Text style={styles.ingred}>. </Text>
                  <Text style={styles.ingred}>.   </Text>
                  <Text style={styles.ingred}>. </Text>
                  <Text style={styles.ingred}>. </Text>
                  <Text style={styles.ingred}>.   </Text>
                </View>
                <View >
                <Text style={styles.paragraph}>Preparacion </Text>
                  <Text style={styles.texto}>
                 Aqui ponemos el procedimiento para la paleta  asdfasdfasdfasdfsvzdasdfaqwersdasdasdfasasfsdfasd asd asdf asqwer qwer qwe  aad qwe asdf asdf asdfasdf asdf asdf weqo i iuoy iuy iuy uih kjh ug jgh iuh
                   </Text>
                  <Text></Text>
                </View>
                
              <View>
                        <Button
                            title="Recetas de Paletas"
                            onPress={()=>navigation.navigate('RecPa')}
                        />
              </View>
            </View>
            </ScrollView>
            
        )
    }
export default Paletademanzana
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F6C6EA',
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
        logo: {
          width: 230,
          height: 230,
          justifyContent:'center'
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
          fontSize: 15,
          fontWeight: 'normal',
          textAlign: 'left',
        }

  });
  