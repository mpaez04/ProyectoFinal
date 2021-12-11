
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import  Constants  from 'expo-constants';

const principal =({navigation}) => {
  
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.paragraph}>Recetario</Text>
          <Text style={styles.paragraph}>de</Text>
          <Text style={styles.paragraph}>reposterias</Text>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={{ uri:"https://www.deliciosi.com/images/1700/1789/recetas-de-postres-y-reposteria.jpg" }}
          />
        </View>   
      </View>
  );
}
export default principal
const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F1A8C1',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    color: 'red',
    marginBottom: 15,
  },
  container2: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingBottom:1,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 230,
    height: 230,
    justifyContent: 'center'
  },
  disenobtn:
  {
    margin: 25,
    marginTop: 25,
    
  },
  buttonStyle: {
    color: 'red',
    marginBottom: 1,
},
  paragraph: {
    margin: 24,
    marginTop: 25,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
