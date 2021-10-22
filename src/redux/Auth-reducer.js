import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = 'react-1/auth/SET_USER_DATA';
const SET_URL_CAPTCHA = 'react-1/auth/SET_URL_CAPTCHA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    urlCaptcha: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        case SET_URL_CAPTCHA: {
            return {
                ...state,
                urlCaptcha: action.urlCaptcha
            }
        }
        default:
            return state;

    }
}


const setAuthUserData = (userId, email, login, isAuth, urlCaptcha) => {
    return {
        type: SET_USER_DATA,
        data: { userId, email, login, isAuth, urlCaptcha }
    }
}

const setUrlCaptcha = (urlCaptcha) => {
    return {
        type: SET_URL_CAPTCHA,
        urlCaptcha
    }
}


export const setAuthThunk = () => {
    return async (dispatch) => {
        let data = await authAPI.authUser();

        if (data.resultCode === 0) {
            //console.log(response);
            dispatch(setAuthUserData(data.data.id, data.data.email, data.data.login, true, null));
        }
    }

}

export const login = (email, pass, rememberMe, captcha) => {
    return async (dispatch) => {
        let response = await authAPI.logIn(email, pass, rememberMe, captcha);

        if (response.data.resultCode === 0) {
            dispatch(setAuthThunk());
        }
        if (response.data.resultCode !== 0) {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "Something error";
            dispatch(stopSubmit("login", { _error: message }));
        }
        if (response.data.resultCode === 10) {      // captcha
            let resp = await authAPI.captcha();
            //console.log(response);
            dispatch(setUrlCaptcha(resp.data.url));
        }
    }
}

export const logout = () => {
    return async (dispatch) => {
        let response = await authAPI.logOut();

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false, null));
        }
    }
}


export default authReducer;