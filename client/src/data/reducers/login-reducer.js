import * as actiontypes from "../actions/action-types"
import { l } from '../../utility/log-helper';


export const loginReducer = (state = {
    request_status: false
}, action) => {
    switch (action.type) {
        case actiontypes.LOGIN_UPDATE_TOKEN_INFO:        
            return Object.assign({}, state, {
                email: action.payload.email,
                token: action.payload.token
            })
        case actiontypes.UPDATE_PROFILE_INFO:        
            return Object.assign({}, state, {
                firstname: action.payload.firstname,
                lastname: action.payload.lastname,
                city: action.payload.city,
                postalcode: action.payload.postalcode,
                phone: action.payload.phone
            })
        case actiontypes.LOGIN_BEGIN_HTTP_REQ:
        return Object.assign({}, state, {
            request_status: true          
        })
        case actiontypes.LOGIN_END_HTTP_REQ:
        return Object.assign({}, state, {
            request_status: false
        })
        default:
            return state;
    }
}