import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image style={styles.backgroundImage} source={require("../assets/images/background.jpg")} />

            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/images/logo_concession.png")} />
                {/*<Text style={styles.title}>Concession</Text>*/}
            </View>

            <View style={styles.flex_container}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.navigate('ListVoituresScreen')}
                >
                    <Image style={styles.teaserImage} source={require("../assets/images/default-car.png")} />
                    <Text>VOITURES</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.navigate('ListMarquesScreen')}
                >
                    <Image style={styles.teaserImage} source={require("../assets/images/default-brand.png")} />
                    <Text>MARQUES</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    backgroundImage: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0.3,
        resizeMode: "contain",
    },
    logoContainer: {
        alignItems: "center",
        marginBottom: 20,
    },
    logo: {
        width: 250,
        height: 250,
        borderRadius: 125,
        borderWidth: 2,
        borderColor: "black",
    },
    title: {
        fontSize: 30,
        margin: 20,
    },
    teaserImage: {
        width: 50,
        height: 50,
    },
    icon: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 20,
    },
    flex_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        marginVertical: 20,
    }
});
