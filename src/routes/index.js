import React, {useEffect} from 'react'
import { 
    View,
    Text
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from '../screens/SignIn';
import TelaInicial from '../screens/TelaInicial';

const Stack = createNativeStackNavigator();



export default function Routes() {

  
    return (
      <NavigationContainer>

        <Stack.Navigator>
            
            <Stack.Screen 
                name="SignIn"
                component={SignIn}
            />

            <Stack.Screen 
                name="TelaInicial"
                component={TelaInicial}
                options={{
                    gestureEnabled: false,
                    headerShown: false
                }}
            />
        </Stack.Navigator>

      </NavigationContainer>
  )
}