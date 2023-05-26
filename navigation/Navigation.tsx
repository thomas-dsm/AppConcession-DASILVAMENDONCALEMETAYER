import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeSreen";
import AccountScreen from "../screens/AccountScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (

        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: 'Home',
                        //tabBarIcon: () => <FontAwesomeIcon icon={faHome} />,
                    }}
                />
                <BottomTabNavigator.Screen
                    name="Account"
                    component={AccountScreen}
                    options={{
                        title: 'Account',
                        //tabBarIcon: () => <FontAwesomeIcon icon={faUser} />,
                    }}
                />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>

)
}