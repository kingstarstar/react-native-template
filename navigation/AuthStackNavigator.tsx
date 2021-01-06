import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
const AuthStack = createStackNavigator()

function AuthStackNavigator(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="Login" component={LoginScreen}/>
            <AuthStack.Screen name="Register" component={RegisterScreen}/>
        </AuthStack.Navigator>
    )
}
export default AuthStackNavigator