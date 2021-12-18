import React from "react";
import {createStackNavigator} from '@react-navigation/native';

import Preload from '../pages/Preload';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Register from '../pages/Register';

const Stack =createStackNavigator();

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Preload" component={Preload}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Logout" component={Logout}/>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Products" component={Products}/>
    </Stack.Navigator>

);