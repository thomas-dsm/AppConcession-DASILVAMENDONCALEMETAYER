import {StyleSheet, Text, View, FlatList, Image, Button, Touchable, TouchableOpacity} from 'react-native';
import React from "react";
import {useNavigation} from "@react-navigation/native";
import ListMarquesScreen from "./ListMarquesScreen";

export default function HomeScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Concession</Text>
            </View>

            <View style={styles.flex_container}>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.navigate('ListVoituresScreen')}
                >
                    <Image style={styles.teaserImage} source= {require("../assets/images/default-car.png")}  alt={"car-icon"}/>
                    <Text>Consulter les voitures</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => navigation.navigate('ListMarquesScreen')}
                >
                    <Image style={styles.teaserImage} source= {require("../assets/images/default-brand.png")}  alt={"brand-icon"}/>
                    <Text>Consulter les marques</Text>
                </TouchableOpacity>
            </View>
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
    },
    teaserImage: {
        width: 50,
        height: 50,
    },
    icon: {
        width: 100,
        height: 100,
    },
    flex_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
});