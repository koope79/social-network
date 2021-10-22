import { setAuthThunk } from "./Auth-reducer";

const SET_INITIALIZE_SUCCESS = 'react-1/app/SET_INITIALIZE_SUCCESS';


let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZE_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state;

    }
}

const setInitializeSuccess = () => {
    return {
        type: SET_INITIALIZE_SUCCESS,
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let promise = dispatch(setAuthThunk());     // dispatch возвращает промис
        Promise.all([promise]).then(() => {
            dispatch(setInitializeSuccess());
        })
    }
}
 
export default appReducer;