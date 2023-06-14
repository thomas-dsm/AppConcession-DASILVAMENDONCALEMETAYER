import {NavigationContainer} from "@react-navigation/native";
import AccountScreen from "../screens/AccountScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import { FontAwesome } from '@expo/vector-icons';
import StackNavigation from "./StackNaviguation";
import {StyleSheet} from "react-native";
import React from "react";

const BottomTabNavigator = createBottomTabNavigator();
export default function Navigation() {
    return (

        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Accueil">
                <BottomTabNavigator.Screen
                    name="Home"
                    component={StackNavigation}
                    options={{
                        tabBarIcon: () => <FontAwesome name="home" size={24} color="black" />,
                        headerShown: false,
                    }}
                />
                <BottomTabNavigator.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        title: 'Account',
                        tabBarIcon: () => <FontAwesome name="user" size={24} color="black" />,
                    }}
                />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    TabBarOptions: {
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundC010r: '#ffffff',
        borderRadius: 15,
        height: 90,
    }
});