import { friendsAPI } from "../api/api";

const SET_USERS = 'react-1/friends/SET_USERS';
const FOLLOW = 'react-1/friends/FOLLOW';
const UNFOLLOW = 'react-1/friends/UNFOLLOW';
const SET_CURRENT_PAGE = 'react-1/friends/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'react-1/friends/TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'react-1/friends/TOGGLE_IS_FOLLOWING_PROGRESS';

const SET_TOTAL_USER_COUNT = 'react-1/friends/SET_TOTAL_USER_COUNT';


let initialState = {
    usersData: [],
    // usersData: [
    //     { id: 1, fullName: 'Sasha Khalz', status: 'Yo!', location: {city: 'St-Pb', country: 'Russia'}, followed: true, photoURL: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png'},
    //     { id: 2, fullName: 'Yaroslav Novikov', status: 'Heeelloo', location: {city: 'St-Pb', country: 'Russia'}, followed: false, photoURL: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png'},
    //     { id: 3, fullName: 'Alena Perevezova', status: 'Piece!', location: {city: 'St-Pb', country: 'Russia'}, followed: true, photoURL: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png'},
    //     { id: 4, fullName: 'Kirill Kazancev', status: 'Yo', location: {city: 'St-Pb', country: 'Russia'}, followed: false, photoURL: 'https://avatarfiles.alphacoders.com/968/thumb-96848.png'}
    // ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            let stateCopy = {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

            return stateCopy;

        }

        case UNFOLLOW: {
            let stateCopy = {
                ...state,
                usersData: state.usersData.map(u => {  // копирование определенного объекта из массива при выполнении условия
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

            return stateCopy;
        }

        case SET_USERS: {
            return {
                ...state,
                usersData: [...action.users]
            }

        }

        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id != action.userID)
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        }
        default:
            return state;

    }
}

// AC //
export const followedAC = (userdId) => {
    return {
        type: FOLLOW,
        userId: userdId
    }
}
export const unfollowedAC = (userdId) => {
    return {
        type: UNFOLLOW,
        userId: userdId
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const setIsFetchingAC = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const toggleFollowingProgress = (isFetching, userID) => {
    return {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userID: userID
    }
}

const setTotalUserCount = (totalCount) => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalCount
    }
}


// Thunk //
export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetchingAC(true));

        let data = await friendsAPI.getFriends(currentPage, pageSize);

        dispatch(setTotalUserCount(data.totalCount));
        dispatch(setIsFetchingAC(false));
        dispatch(setUsersAC(data.items));
    }
}

export const followThunk = (uId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, uId));

        let data = await friendsAPI.followFriend(uId);

        if (data.resultCode == 0) {
            dispatch(followedAC(uId));
        }
        dispatch(toggleFollowingProgress(false, uId));
    }
}

export const unfollowThunk = (uId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, uId));

        let data = await friendsAPI.unfollowFriend(uId);
        if (data.resultCode == 0) {
            dispatch(unfollowedAC(uId));
        }
        dispatch(toggleFollowingProgress(false, uId));
    }
}

export default friendsReducer;