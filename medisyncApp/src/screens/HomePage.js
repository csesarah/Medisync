import React, { useContext, useState, useRef } from 'react';
import { StyleSheet } from "react-native";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from "@react-navigation/native";
import { BleManager } from 'react-native-ble-plx'

import DashboardPage from "./DashboardPage";
import GraphPage from "./GraphPage";
import InfoPage from "./InfoPage";
import SettingsPage from "./SettingsPage";

const dashboardName = 'Dashboard';
const graphName = 'Graph';
const infoName = 'Info';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

const HomePage = ( ) => {
    return (
        <Tab.Navigator
        initialRouteName={dashboardName}
        screenOptions=
        { 
            ({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let routeName = route.name;

                    if (routeName === dashboardName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (routeName === graphName) {
                        iconName = focused ? 'analytics' : 'analytics-outline'
                    } else if (routeName === infoName) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (routeName === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })
        }
        >
            <Tab.Screen name={dashboardName} component={DashboardPage} options={{ headerShown: false }} />
            <Tab.Screen name={graphName} component={GraphPage} options={{ headerShown: false }} />
            <Tab.Screen name={infoName} component={InfoPage} options={{ headerShown: false }} />
            <Tab.Screen name={settingsName} component={SettingsPage} options={{ headerShown: false }} />

        </Tab.Navigator>
    );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});