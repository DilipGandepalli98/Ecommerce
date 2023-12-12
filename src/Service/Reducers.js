import { DETAILS,FORM_DETAILS } from "./Constants";

const initialState = {
    details:[],
    formDetails:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case DETAILS :
            return {
                ...state,
                details:action.payload
            };
        case FORM_DETAILS:
            return {
                ...state,
                formDetails:[...state.formDetails,action.payload]
            };
        default :
            return state
    }
}
export default reducer