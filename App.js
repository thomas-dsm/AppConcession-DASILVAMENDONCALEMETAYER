// import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import HomeScreen from './screens/HomeSreen';
import Navigation from "./navigation/Navigation";


export default function App() {
  return (
      <>
        <SafeAreaView style={styles.topSafeArea}/>
        <SafeAreaView style={styles.mainSafeArea}>
          
        </SafeAreaView>
      </>
  );
}

const styles = StyleSheet.create({
  mainSafeArea: {
    flex: 1,
    backgroundColor: "#7a96e9"
  },
  topSafeArea: {
    flex: 0,
    backgroundColor: 'darksalmon'
  }
});
