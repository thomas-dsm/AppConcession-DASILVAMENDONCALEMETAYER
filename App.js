import {SafeAreaView, StyleSheet} from 'react-native';
import store from "./redux/store";
import Navigation from "./navigation/Navigation";
import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import {Provider} from "react-redux";


export default function App() {
  return (
    <>
        <Provider store={store}>
            <ApplicationProvider {...eva} theme={eva.light}>
                <SafeAreaView style={styles.topSafeArea}/>
                <SafeAreaView style={styles.mainSafeArea}>
                    <Navigation/>
                </SafeAreaView>
            </ApplicationProvider>
        </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  mainSafeArea: {
    flex: 1,
  },
  topSafeArea: {
    flex: 0,
  }
});
