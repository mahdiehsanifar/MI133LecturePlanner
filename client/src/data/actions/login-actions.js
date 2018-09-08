import * as actiontypes from "./action-types"

import axios from 'axios'
import { LOGIN_PATH, REGISTER_PATH } from '../../utility/endpoints';





export const updateLoginInfo = (payload) => {
    return {
        type: actiontypes.LOGIN_UPDATE_TOKEN_INFO,
        payload: payload
    }
}
export const beginHttpReq = () => {
    return {
        type: actiontypes.LOGIN_BEGIN_HTTP_REQ
    }
}
export const endHttpReq = () => {
    return {
        type: actiontypes.LOGIN_END_HTTP_REQ
    }
}
export const errorHttpReq = () => {
    return {
        type: actiontypes.LOGIN_ERROR_HTTP_REQ
    }
}

export const loginApi = (email, password, extra) => {
    return ds => {
        const model = {
            email: email,
            password: password
        }
        ds(beginHttpReq())
        axios.post(LOGIN_PATH, model)
            .then(response => {
                ds(updateLoginInfo(response.data))
                ds(endHttpReq())
                
                extra()
            })
            .catch(error => {
                ds(errorHttpReq())
                ds(endHttpReq())
                console.log(error)
            })

    }
}
export const registerApi = (email, password, extra) => {
    return ds => {
        const model = {
            email: email,
            password: password
        }
        ds(beginHttpReq())
        axios.post(REGISTER_PATH, model)
            .then(response => {
                //ds(updateLoginInfo(response.data))
                ds(endHttpReq())
                if (response.status == 201) {
                    extra()
                }
            })
            .catch(error => {
                ds(errorHttpReq())
                ds(endHttpReq())
                console.log(error)
            })

    }
}