import { ActionTypes } from '../constants';

export const addFavorite = (car) => {
    return {
        type: ActionTypes.ADD_FAVORITE_CAR,
        car: car
    }
}
