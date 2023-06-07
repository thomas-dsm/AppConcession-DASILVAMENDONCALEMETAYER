// const initialState = {
//     voitures: [],
//     favoritefavorites: [],
// }
//
// let appReducer;
// export default appReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_FAVORITE_NOUNOURS:
//             // @ts-ignore
//             state.favoriteNounours.push(action.nounours)
//             return {...state};
//         case FETCH_NOUNOURS:
//             // @ts-ignore
//             return {...state, nounours: action.payload};
//         case DELETE_NOUNOURS:
//             // @ts-ignore
//             return {...state, nounours: [...state.nounours.filter((item) => item.name != action.payload.name)]}
//         default:
//             return state;
//     }
// }