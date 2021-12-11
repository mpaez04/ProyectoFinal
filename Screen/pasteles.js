import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native'
import  Constants  from 'expo-constants';

const pasteles =({navigation}) => {
  
        return (
            <View style={[styles.container]}>
                
                <View style={{flex:1}, styles.container}>
                <Text style={styles.paragraph}>En este apartado encontraras recetas de pasteles</Text>
                
                </View>
                <View style={{flex:1.5}}>
                    <Image
                        style={styles.logo}
                        source={{ uri:"https://www.pequerecetas.com/wp-content/uploads/2020/09/recetas-de-pasteles.jpg" }}
                    />
                </View>
                
              <View style={{flex:1}}>
                  <View>
                  </View>
            
                  <View   style={styles.container2}>
                        <Button
                            color="#865076"
                            title="Pan de elote"
                            onPress={()=>navigation.navigate('Panelote')}
                        />
                  </View>
                </View>
               
            </View>
        )
    }
export default pasteles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F3C4E5',
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
        width: 250,
        height: 250,
      },
      container2: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom:10,
      },
  });
  