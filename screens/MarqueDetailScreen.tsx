import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import {useNavigation} from "@react-navigation/native";
export default function MarqueDetailScreen({ route }) {
    const { marque } = route.params;
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Détails de la voiture</Text>
            </View>
            <View style={styles.flex_container}>
                <Image style={styles.teaserImage} source={marque.image} alt={"car-icon"}/>
                <View style={styles.flex_container}>
                    <Text>Nom : {marque.nom}</Text>
                    <Text>Année de création : {marque.annee_creation}
                    </Text>
                    <Text>Pays : {marque.pays}</Text>
                </View>
            </View>
            <View style={styles.flex_container_Button}>
                <Button title={"Modifier"} onPress={() => navigation.navigate('EditMarqueScreen', { marque: marque })}></Button>
                <Button title={"Supprimer"} onPress={() => navigation.navigate('ListMarquesScreen')}></Button>
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
