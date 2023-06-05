// import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Navigation from "./navigation/Navigation";
import HomeScreen from "./screens/HomeScreen";
import StackNavigation from "./navigation/StackNaviguation";


export default function App() {
  return (
      <>
        <SafeAreaView style={styles.topSafeArea}/>
        <SafeAreaView style={styles.mainSafeArea}>
            <Navigation/>
        </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  mainSafeArea: {
    flex: 1,
    //backgroundColor: "#7a96e9"
  },
  topSafeArea: {
    flex: 0,
    //backgroundColor: 'darksalmon'
  }
});
