import { types } from '../types/type';

const initialState= {
    card:[]
}

export const cardReducer = (state= initialState, action) => {

    switch (action.type) {
        case types.cardAddNewMovie:
            return {
                ...state,
                card: [action.payload, ...state.card]
            }
    
        default:
           return state;
    }

}