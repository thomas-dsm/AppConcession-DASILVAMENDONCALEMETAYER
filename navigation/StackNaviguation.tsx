import HomeScreen from "../screens/HomeScreen";
import VoitureDetailScreen from "../screens/VoitureDetailScreen";
import AccountScreen from "../screens/AccountScreen";
import {createStackNavigator} from "@react-navigation/stack";
import ListVoituresScreen from "../screens/ListVoituresScreen";
import ListMarquesScreen from "../screens/ListMarquesScreen";
import MarqueDetailScreen from "../screens/MarqueDetailScreen";

export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
            <Stack.Navigator initialRouteName="Accueil">
                <Stack.Screen name="Accueil" component={HomeScreen}/>
                <Stack.Screen name="VoitureDetailScreen" component={VoitureDetailScreen}/>
                <Stack.Screen name="MarqueDetailScreen" component={MarqueDetailScreen}/>
                <Stack.Screen name="ListVoituresScreen" component={ListVoituresScreen}/>
                <Stack.Screen name="ListMarquesScreen" component={ListMarquesScreen}/>
                <Stack.Screen name="Settings" component={AccountScreen}/>
            </Stack.Navigator>
    )
}