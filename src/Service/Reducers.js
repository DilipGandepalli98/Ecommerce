import { DETAILS } from "./Constants";

const initialState = {
    details:[]
}

const detailsReducer = (state = initialState, action) => {
    switch (action.type){
        case DETAILS :
            return {
                ...state,
                details:action.payload
            };
        default :
            return state
    }
}
export default detailsReducer;