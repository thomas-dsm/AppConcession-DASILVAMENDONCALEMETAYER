import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import {createStackNavigator} from "@react-navigation/stack";
import StackNavigation from "./StackNaviguation";
import {StyleSheet} from "react-native";

const BottomTabNavigator = createBottomTabNavigator();
export default function Navigation() {
    return (

        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home"
                                          // tabBarOptions={{
                                          //     showLabel : false,
                                          //     style: {
                                          //         position: 'absolute' ,
                                          //         bottom: 25,
                                          //         left: 20,
                                          //         right : 20,
                                          //         elevation: 0,
                                          //         backgroundC010r: '#ffffff' ,
                                          //         borderRadius: 15,
                                          //         height: 90,
                                          //     }
                                          // }}
            >
                <BottomTabNavigator.Screen
                    name="Home"
                    component={StackNavigation}
                    options={{
                        tabBarIcon: () => <FontAwesomeIcon icon={faHome} />,
                        headerShown: false,
                    }}
                />
                <BottomTabNavigator.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        title: 'Account',
                        tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
                    }}
                />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    // TabBar: {
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
    // }
});