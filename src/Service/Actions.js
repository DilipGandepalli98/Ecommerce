import { DETAILS, FORM_DETAILS } from './Constants';

export const detailsAction = (data) => ({
    type:DETAILS,
    payload:data
})

export const formDetails = (payload) =>({
    type:FORM_DETAILS,
    payload
})