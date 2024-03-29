import {createMarquesList, createVoituresList} from "../../data/stub";

const initialState = {
    voitures: createVoituresList(),
    favoriteCars: [],
    marques: createMarquesList(),
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAVORITE_CAR':
            return {
                ...state,
                favoriteCars: [...state.favoriteCars, action.car]
            };
        case 'UPDATE_MARQUE':
            console.log(action.payload);
            console.log(state.marques);
            const updatedMarques = state.marques.map((marque) =>
                marque.nom === action.payload.nom ? action.payload : marque
            );
            return {
                ...state,
                marques: updatedMarques,
            };
        case 'DELETE_MARQUE':
            return {
                ...state,
                marques: [...state.marques.filter((item) => item.nom != action.payload.nom)]};
        case 'UPDATE_FAVORITES':
            return {
                ...state,
                favoriteCars: action.payload,
            };
        default:
            return state;
    }
}

export default appReducer;
