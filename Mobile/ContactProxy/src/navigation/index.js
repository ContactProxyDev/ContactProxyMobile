import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ConfirmResetPasswordScreen from '../screens/ConfirmResetPasswordScreen';
import SetPasswordScreen from '../screens/SetPasswordScreen';
import ConfirmPwdRstEmailScreen from '../screens/ConfirmPwdRstEmailScreen';
import MessageScreen from '../screens/MessageScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name = 'SignIn' component={SignInScreen}/>
        <Stack.Screen name = 'SignUp' component={SignUpScreen}/>
        <Stack.Screen name = 'SetPassword' component={SetPasswordScreen}/>
        <Stack.Screen name = 'ConfirmResetPassword' component={ConfirmResetPasswordScreen}/>
        <Stack.Screen name = 'Message' component={MessageScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation