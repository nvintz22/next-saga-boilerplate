import * as T from './action.types'
import { initStateTypes } from './types' 

const initialState: initStateTypes = {
    name: "Juan Dela Cruz",
    isRequestingName: false
}

const Template = (state = initialState, action) => {
    switch(action.type){
        case T.REQUEST_NAME:
            return {...state, isRequestingName: true }
        case T.RECEIVE_NAME:
            return {
                ...state, 
                name: action.payload, 
                isRequestingName: false
            }
        default:
            return state;
    }
}

export default Template