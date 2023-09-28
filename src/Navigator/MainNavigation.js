import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "../Screens/LoginScreen";
import Registration from "../Screens/Registration";
import CartScreen from "../Screens/CartScreen";
import Notification from "../Screens/Notification";
import BottomTabNavigator from "./BottomTabNavigator";
import SearchScreen from "../Screens/SearchScreen";
import Calculator from "../Screens/practice/Calculator";
import StarRating from "../Screens/practice/StarRating"

function MainNavigation() {

    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} options={{headerShown:false}}/>
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Register' component={Registration} options={{headerShown:false}} />
            <Stack.Screen name='Notification' component={Notification} options={{headerShown:false}} />
            <Stack.Screen name='CartScreen' component={CartScreen} options={{headerShown:false}} />
            <Stack.Screen name='SearchScreen' component={SearchScreen} options={{headerShown:false}} />
            <Stack.Screen name='Calculator' component={Calculator} options={{headerShown:false}} />
            <Stack.Screen name='StarRating' component={StarRating} options={{headerShown:false}} />
        </Stack.Navigator>
    )
} 
export default MainNavigation;