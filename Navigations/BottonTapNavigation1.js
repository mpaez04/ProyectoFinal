import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'
import paletas from '../Screen/paletas';
import galletas from '../Screen/galletas';
import alumnos from '../Navigations/StackNavigator1';
import pasteles from '../Navigations/Stackpasteles';
import principal from '../Screen/principal';
const Tab = createBottomTabNavigator();

export default function BottomTapNavigator1(){
    return(
        <Tab.Navigator
            initialRouteName= "Pasteles"
            tabBarOptions={{
                activeTintColor:"#008000",
                inactiveTintColor: "#060606",
                showLabel:true,
                LabelStyle:{
                    fontSize:12
                },
                Style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }
            }}
        >
             <Tab.Screen 
                name= "Principal"
                component= {principal}
                options={{
                    tabBarLabel:"Principal",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"ios-thermometer-outline"} size={30} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name= "Pasteles"
                component= {pasteles}
                options={{
                    tabBarLabel:"Pasteles",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"ios-thermometer-outline"} size={30} color={color} />
                    ),
                    headerShown:false
                }}
            />
            
            <Tab.Screen 
                name= "Paletas"
                component= {paletas}
                options={{
                    tabBarLabel:"Paletas",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"logo-apple"} size={20} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name= "Galletas"
                component= {galletas}
                options={{
                    tabBarLabel:"Galletas",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"md-star-outline"} size={20} color={color} />
                    ),
                    headerShown:false
                }}
            />
            <Tab.Screen 
                name= "alumnos"
                component= {alumnos}
                options={{
                    tabBarLabel:"alumnos",
                    tabBarIcon: ({color})=>(
                        <Ionicons name={"md-star-outline"} size={20} color={color} />
                    ),
                    headerShown:false
                }}
            />
            
        </Tab.Navigator>
    )
}