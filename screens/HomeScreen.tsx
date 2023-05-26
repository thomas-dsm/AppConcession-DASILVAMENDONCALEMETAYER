import {StyleSheet, Text, View, FlatList, Image, Button, Touchable, TouchableOpacity} from 'react-native';
import VoitureListItem from "../components/VoitureListItem";
import {Voiture} from "../Entity/Voiture";
import React from "react";

export const VOITURES_LIST : Voiture[] = [
    new Voiture("AA-000-AA", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
    new Voiture("BB-000-BB", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
    new Voiture("CC-000-CC", "12-05-2000", "FFFFFF", require("../assets/images/default-car.png")),
]

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Concession</Text>
            </View>

            <View style={styles.flex_container}>
                <TouchableOpacity style={styles.icon}>
                    <Image style={styles.teaserImage} source= {require("../assets/images/default-car.png")}  alt={"car-icon"}/>
                    <Text>Consulter les voitures</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.icon}>
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
        backgroundColor: "darksalmon",
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