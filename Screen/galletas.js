import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, StyleSheet, Image, Button, ScrollView } from 'react-native'
import  Constants  from 'expo-constants';

const galletas =({navigation}) => {
  
        return (
            <View style={[styles.container]}>
                
                <View style={{flex:1}, styles.container}>
                <Text style={styles.paragraph}>En este apartado encontraras recetas de Galletas</Text>
                
                </View>
                <View style={{flex:1.5}}>
                    <Image
                        style={styles.logo}
                        source={{ uri:"https://gastronomiaycia.republica.com/wp-content/uploads/2010/08/doce_recetas_galletas.jpg" }}
                    />
                </View>
                
              <View style={{flex:1}}>
                  <View>
                  </View>
            
                  <View   style={styles.paragraph}>
                        <Button
                            color= "#F5B7B1"
                            title="coricos"
                            onPress={()=>navigation.navigate('coricos')}
                        />
                  </View>
                    <View style={styles.paragraph}>
                    </View>
                </View>
               
            </View>
        )
    }
export default galletas
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F2A6DA',
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
      }
  });
  