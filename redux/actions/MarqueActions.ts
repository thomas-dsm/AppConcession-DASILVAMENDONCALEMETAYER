import {ActionTypes} from "../constants";
export const updateMarque = (marque) => ({
    type: ActionTypes.UPDATE_MARQUE,
    payload: marque,
});

export const deleteMarque = (marqueId) => ({
    type: ActionTypes.DELETE_MARQUE,
    payload: marqueId,
});
