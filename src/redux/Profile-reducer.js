import { profileAPI } from "../api/api";

const ADD_POST_REDUX = 'react-1/profile/ADD_POST_REDUX';
const ADD_LIKE = 'react-1/profile/ADD-LIKE';
const SET_POSTS = 'react-1/profile/SET_POSTS';
const SET_USER_PROFILE = 'react-1/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'react-1/profile/SET_USER_STATUS';


let initialState = {
    postsData: [],
    profile: null,
    fullName: "",
    aboutMe: "",
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_REDUX: {
            let newPost = {
                id: state.postsData[0].id + 1,
                message: action.formData,
                likes: 0,
                changes: 0
            }
            return {
                ...state,
                postsData: [newPost, ...state.postsData]
            }
        }

        case ADD_LIKE: {
            // let stateCopy = {...state};
            // stateCopy.postsData = [...state.postsData];

            // let currentObj = stateCopy.postsData.find(e => e.id == action.id);
            // if (action.changes === 0) {
            //     currentObj.likes = currentObj.likes + 1;
            //     currentObj.changes = 1;
            //     return stateCopy;
            // }
            // else if (action.changes === 1) {
            //     currentObj.likes = currentObj.likes - 1;
            //     currentObj.changes = 0;
            //     return stateCopy;
            // }
            let stateCopy = {
                ...state,
                postsData: state.postsData.map(p => {
                    if (p.id === action.id) {
                        if (p.changes === 0) {
                            return { ...p, likes: p.likes + 1, changes: 1 }         // возврат новой копии конкретного нужного объекта 
                        }
                        else if (p.changes === 1) {
                            return { ...p, likes: p.likes - 1, changes: 0 }
                        }
                    }
                    return p;           // map пробегает по каждому объекту массива и возвращает его же.
                })
            };

            return stateCopy;
        }
       
        case SET_POSTS:  {
            return { 
                ...state,
                postsData: [...state.postsData, ...action.posts]
            }
        }
        
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
                fullName: action.profile,
                aboutMe: action.profile
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state;

    }
}

export const addPostAC = (formData) => {
    return {
        type: ADD_POST_REDUX,
        formData
    }
}

export const addLikeActionCreator = (id, changes) => {
    return {
        type: ADD_LIKE,
        id: id,
        changes: changes
    }
}

export const setPostsActionCreator = (posts) => {
    return{
        type: SET_POSTS,
        posts:posts
    }
}

const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const setUserStatusAC = (status) => {
    return {
        type: SET_USER_STATUS,
        status
    }
}


export const setUserProfileThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileAPI.getUser(userId);

        dispatch(setUserProfile(data));
        //dispatch(setCurrentProf(status));
    }
}

export const getUserStatusTh = (userID) => {
    return async (dispatch) => {
        let data = await profileAPI.getStatus(userID);  

        dispatch(setUserStatusAC(data));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status);
        
        if(response.data.resultCode == 0){
            dispatch(setUserStatusAC(status));
        }
    }
}

export default profileReducer;