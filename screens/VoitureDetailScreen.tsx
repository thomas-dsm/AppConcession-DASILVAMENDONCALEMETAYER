import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from "react-redux";
import { addFavorite, readFavorites, clearStorage } from "../redux/actions/storage";

export default function VoitureDetailScreen({ route }) {
    const { voiture } = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [immat, setImmat] = useState(voiture.immat);
    const [dateImmat, setDateMiseEnCirculation] = useState(voiture.dateImmat);
    const [couleur, setCouleur] = useState(voiture.couleur);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: voiture.immat,
            headerRight: () => (
                <View style={styles.headerButtonContainer}>
                    <FontAwesome.Button
                        name="star"
                        backgroundColor="#000"
                        onPress={addToFavorites}
                        iconStyle={styles.starIcon}
                    />
                </View>
            ),
        });
    }, [navigation, voiture]);

    const addToFavorites = () => {
        dispatch(addFavorite(voiture));
    };

    const readFavoritesStorage = () => {
        dispatch(readFavorites());
    };

    const clearAllStorage = () => {
        dispatch(clearStorage());
    };

    const handleEditPress = () => {
        setIsEditing(true);
    };

    const handleSavePress = () => {
        // Save the edited values
        // You can add your logic here to update the data source or make an API call
        setIsEditing(false);
    };

    const handleDeletePress = () => {
        Alert.alert(
            "Confirmation",
            "Êtes-vous sûr de vouloir supprimer cette voiture ?",
            [
                { text: "Annuler", style: "cancel" },
                {
                    text: "Supprimer",
                    style: "destructive",
                    onPress: () => {
                        // Supprimer la voiture de la liste
                        // Ajoutez votre logique pour supprimer la voiture ici
                        navigation.navigate('ListVoituresScreen');
                    },
                },
            ]
        );
    };

    const dismissKeyboard = () => {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.container}>
                <View style={styles.centered}>
                    <Text style={styles.title}>Détails de la voiture</Text>
                </View>
                <View style={styles.contentContainer}>
                    <Image style={styles.teaserImage} source={voiture.image} alt={"car-icon"} />
                    <View style={styles.detailsContainer}>
                        <Text style={styles.detailText}>Immatriculation:</Text>
                        {isEditing ? (
                            <TextInput
                                style={styles.input}
                                value={immat}
                                onChangeText={text => setImmat(text)}
                            />
                        ) : (
                            <Text>{immat}</Text>
                        )}
                        <Text style={styles.detailText}>Date de mise en circulation:</Text>
                        {isEditing ? (
                            <TextInput
                                style={styles.input}
                                value={dateImmat}
                                onChangeText={text => setDateMiseEnCirculation(text)}
                            />
                        ) : (
                            <Text>{dateImmat}</Text>
                        )}
                        <Text style={styles.detailText}>Couleur:</Text>
                        {isEditing ? (
                            <TextInput
                                style={styles.input}
                                value={couleur}
                                onChangeText={text => setCouleur(text)}
                            />
                        ) : (
                            <Text>{couleur}</Text>
                        )}
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    {isEditing ? (
                        <Button
                            title="Enregistrer"
                            onPress={handleSavePress}
                        />
                    ) : (
                        <FontAwesome.Button
                            name="edit"
                            backgroundColor="#007AFF"
                            onPress={handleEditPress}
                        >
                            Modifier
                        </FontAwesome.Button>
                    )}
                    <FontAwesome.Button
                        name="trash"
                        backgroundColor="#FF3B30"
                        onPress={handleDeletePress}
                    >
                        Supprimer
                    </FontAwesome.Button>
                    <FontAwesome.Button
                        name="arrow-left"
                        backgroundColor="#000"
                        onPress={() => navigation.goBack()}
                    >
                        Retour
                    </FontAwesome.Button>
                </View>
                <View style={styles.bottomButtonContainer}>
                    <Button
                        title="Lire les favoris"
                        onPress={readFavoritesStorage}
                    />
                    <Button
                        title="Vider le stockage"
                        onPress={clearAllStorage}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
        padding: 20,
    },
    centered: {
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    teaserImage: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
    detailsContainer: {
        flex: 1,
    },
    detailText: {
        fontWeight: "bold",
        marginBottom: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
    headerButtonContainer: {
        alignItems: "center",
        marginRight: 10,
    },
    starIcon: {
        marginRight: 0,
    },
    bottomButtonContainer: {
        marginTop: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 4,
        padding: 8,
        marginBottom: 10,
    },
});
