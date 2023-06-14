import {createMarquesList} from "../../data/stub";

const initialState = {
    voitures: [],
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
                marques: state.marques.filter((marque) => marque.id !== action.payload),
            };
        default:
            return state;
    }
}

export default appReducer;
