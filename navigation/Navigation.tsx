import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/HomeSreen";
import AccountScreen from "../screens/AccountScreen";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

export default function Navigation() {
    const BottomTabNavigator = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName="Home">
                <BottomTabNavigator.Screen name="Home" component={HomeScreen}
                                           options={{
                                               title: 'Home',
                                           }}/>
                <BottomTabNavigator.Screen name="Settings" component={AccountScreen}
                                           options={{
                                               title: 'Settings',
                                           }}/>
            </BottomTabNavigator.Navigator>
        </NavigationContainer>
    )
}