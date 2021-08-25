import { type } from "../types/type"


export const loginReducer = (state = {}, action) => {

    switch (action.types) {
        case type.login:
            return {
                id: action.payload.id, 
                name: action.payload.display.name
            }
            
        case type.logout:
            return{}
            
        default:
            return state;
    }

}