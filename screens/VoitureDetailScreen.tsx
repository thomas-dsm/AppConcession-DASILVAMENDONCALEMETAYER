import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";
export default function VoitureDetailScreen({ route }) {
    const { voiture } = route.params;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Détails de la voiture</Text>
            </View>
            <View style={styles.flex_container}>
                <Image style={styles.teaserImage} source={voiture.image} alt={"car-icon"}/>
                <View style={styles.flex_container}>
                    <Text>Immatriculation: {voiture.immat}</Text>
                    <Text>Date de mise en circulation: {voiture.dateMiseEnCirculation}
                    </Text>
                    <Text>Couleur: {voiture.couleur}</Text>
                </View>
            </View>
            <View style={styles.flex_container_Button}>
                <Button title={"Modifier"} onPress={() => navigation.navigate('EditVoitureScreen', { voiture: voiture })}></Button>
                <Button title={"Supprimer"} onPress={() => navigation.navigate('ListVoituresScreen')}></Button>
                <Button title={"Retour"} onPress={() => navigation.goBack()}></Button>
            </View>
            </View>);
}

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
        width: 100,
        height: 100,
    },
    flex_container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    flex_container_Button: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    }
}
);
