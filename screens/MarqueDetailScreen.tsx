import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { updateMarque, deleteMarque } from '../redux/actions/MarqueActions';

export default function MarqueDetailScreen({ route }) {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { marque } = route.params;
    const [isEditing, setIsEditing] = useState(false);
    const [editedNom, setEditedNom] = useState(marque.nom);
    const [editedAnneeCreation, setEditedAnneeCreation] = useState(
        marque.annee_creation
    );
    const [editedPays, setEditedPays] = useState(marque.pays);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: marque.nom,
        });
    }, [navigation, marque]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        const updatedMarque = {
            ...marque,
            nom: editedNom,
            annee_creation: editedAnneeCreation,
            pays: editedPays,
        };

        dispatch(updateMarque(updatedMarque));
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch(deleteMarque(marque.id));
        navigation.navigate('ListMarquesScreen');
        Alert.alert('Suppression réussie', 'La marque a été supprimée avec succès.');
    };

    return (
        <View style={styles.container}>
            <View style={styles.centered}>
                <Text style={styles.title}>Détails de la marque</Text>
            </View>
            <View style={styles.flex_container}>
                <Image style={styles.teaserImage} source={marque.image} alt={'car-icon'} />
                <View style={styles.detailsContainer}>
                    {isEditing ? (
                        <>
                            <TextInput
                                style={styles.input}
                                value={editedNom}
                                onChangeText={setEditedNom}
                            />
                            <TextInput
                                style={styles.input}
                                value={editedAnneeCreation}
                                onChangeText={setEditedAnneeCreation}
                            />
                            <TextInput
                                style={styles.input}
                                value={editedPays}
                                onChangeText={setEditedPays}
                            />
                        </>
                    ) : (
                        <>
                            <Text>Nom : {marque.nom}</Text>
                            <Text>Année de création : {marque.annee_creation}</Text>
                            <Text>Pays : {marque.pays}</Text>
                        </>
                    )}
                </View>
            </View>
            <View style={styles.flex_container_Button}>
                {isEditing ? (
                    <FontAwesome.Button
                        name="check"
                        backgroundColor="#28a745"
                        onPress={handleSave}
                    >
                        Valider
                    </FontAwesome.Button>
                ) : (
                    <FontAwesome.Button
                        name="edit"
                        backgroundColor="#3b5998"
                        onPress={handleEdit}
                    >
                        Modifier
                    </FontAwesome.Button>
                )}
                <FontAwesome.Button
                    name="trash"
                    backgroundColor="#dc3545"
                    onPress={handleDelete}
                >
                    Supprimer
                </FontAwesome.Button>
                <FontAwesome.Button
                    name="arrow-left"
                    backgroundColor="#6c757d"
                    onPress={() => navigation.goBack()}
                >
                    Retour
                </FontAwesome.Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        padding: 20,
    },
    centered: {
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    teaserImage: {
        width: 100,
        height: 100,
    },
    flex_container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    detailsContainer: {
        marginLeft: 20,
    },
    flex_container_Button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 10,
        marginBottom: 10,
    },
});
