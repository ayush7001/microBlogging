import createDataContext from "./createDataContext";
import authService from "../services/authService";
const authReducer =  (state, action) => {
    switch(action.type) {
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                token: action.payload.token,
                email: action.payload.email,
                name: action.payload.name
            }
        default:
            return state
    }
}

const userLogin = (dispatch) => {
    return ({token, email, name}) => {
        authService.setAuthToken({token, email, name});
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: {token, email, name}})
    }
}

export const {Context, Provider} = createDataContext(authReducer, {userLogin}, {token: null, email: null, name: null});