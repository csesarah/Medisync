import React, { useContext } from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import RegisterPage from "../screens/RegisterPage";
import { Context } from "./globalContext";
import UseCamera from "../screens/UseCamera";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const globalContext = useContext(Context)
    const { isLoggedIn, userObj } = globalContext;

    return (
        <Stack.Navigator initialRouteName="Login">
            {(!isLoggedIn || !userObj) ?
                <>
                    <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}} />
                    <Stack.Screen name="Register" component={RegisterPage} options={{headerShown: false}} />
                </>
                :
                <>
                    <Stack.Screen name="Home" component={HomePage} options={{headerShown: false}} />
                    <Stack.Screen name="Camera" component={UseCamera} options={{headerShown: false}} />
                </>
            }
        </Stack.Navigator>
    );
};

export default Navigation;