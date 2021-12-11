import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import pasteles from "../Screen/pasteles";
import coricos from "../Screen/coricos";
import Formulario from '../Screen/Formulario';
import Listado from '../Screen/Listado';
import Panelote from "../Screen/Pandeelote";
import Paletademanzana from "../Screen/Paletademanzana"
import paletas from "../Screen/paletas";
import galletas from "../Screen/galletas";


const Stack = createStackNavigator();

export default function StackNavigations1(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="pasteles" component={pasteles}
                options={{headerShown:false}}
            />
            <Stack.Screen name="Panelote" component={Panelote} />
            <Stack.Screen name="paletas" component={paletas}/>
            <Stack.Screen name="galletas" component={galletas}/>
            <Stack.Screen name="coricos" component={coricos}/>
            <Stack.Screen name="Paletademanzana" component={Paletademanzana}/>
            
        </Stack.Navigator>
    )
}