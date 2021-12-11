/*import React from 'react';
import AlumnosProvider from './Context/AlumnosContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator1 from './Navigations/StackNavigator1'


export default function App() {
  return (
    <AlumnosProvider>
      <NavigationContainer>
        <StackNavigator1/>
      </NavigationContainer>
    </AlumnosProvider>
  );
}
*/
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTapNavigator1 from './Navigations/BottonTapNavigation1';
import AlumnosProvider from './Context/AlumnosContext';


export default function App() {
  return (
    <AlumnosProvider>
    <NavigationContainer>
      <BottomTapNavigator1/>
    </NavigationContainer>
    </AlumnosProvider>
  );
}
//<AlumnosProvider/>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
