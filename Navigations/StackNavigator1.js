import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Formulario from '../Screen/Formulario';
import Listado from '../Screen/Listado';


const Stack = createStackNavigator();

export default function StackNavigations1(){
    return(
        <Stack.Navigator>
             <Stack.Screen
                name="Listado"
                component={Listado}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="Formulario"
                component={Formulario}
            />

           
            
        </Stack.Navigator>
    )
}