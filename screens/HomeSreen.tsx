import { StyleSheet, Text, View } from 'react-native';
export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Mes super Nounours !</Text>
            </View>
            <Text>Mon super test ...</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "grey",
    },
    centered: {
        alignItems: "center"
    },
    title: {
        fontSize: 20
    }
});