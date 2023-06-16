import AsyncStorage from '@react-native-async-storage/async-storage';

export const addFavorite = (voiture) => {
    return async (dispatch) => {
        try {
            const storedFavorites = await AsyncStorage.getItem('favorites');
            const favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
            favorites.push(voiture);
            await AsyncStorage.setItem('favorites', JSON.stringify(favorites));
            alert('Voiture ajoutée aux favoris');
        } catch (error) {
            console.log(error);
            alert("Une erreur s'est produite lors de l'ajout aux favoris");
        }
    };
};

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