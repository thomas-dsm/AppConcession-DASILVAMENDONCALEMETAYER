import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

export const addFavorite = (voiture) => {
    return async (dispatch) => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorites');
            let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

            // Vérifier si la voiture est déjà présente dans les favoris
            const existingIndex = favorites.findIndex((fav) => fav.id === voiture.id);

            if (existingIndex !== -1) {
                // La voiture est déjà présente dans les favoris, donc on la supprime
                favorites.splice(existingIndex, 1);
                Alert.alert('Voiture retirée des favoris');
            } else {
                // La voiture n'est pas encore dans les favoris, donc on l'ajoute
                favorites.push(voiture);
                Alert.alert('Voiture ajoutée aux favoris');
            }
            await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
        } catch (error) {
            console.log(error);
            Alert.alert("Erreur", "Une erreur s'est produite lors de la gestion des favoris");
        }
    };
};


export const isFavorite = (voiture) => {
    return async (dispatch) => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorites');
            let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];

            // Vérifier si la voiture est déjà présente dans les favoris
            const existingIndex = favorites.findIndex((fav) => fav.id === voiture.id);

            if (existingIndex !== -1) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            alert("Une erreur s'est produite lors de la gestion des favoris");
        }
    };
}

export const readFavorites = () => {
    return async (dispatch) => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorites');
            if (storedFavorites) {
                const favorites = JSON.parse(storedFavorites);
                console.log(favorites);
            }
        } catch (error) {
            console.log(error);
            alert("Une erreur s'est produite lors de la lecture des favoris");
        }
    };
};

export const clearStorage = () => {
    return async (dispatch) => {
        try {
            await AsyncStorage.clear();
            alert('Le stockage a été vidé');
        } catch (error) {
            console.log(error);
            alert("Une erreur s'est produite lors de la suppression du stockage");
        }
    };
};