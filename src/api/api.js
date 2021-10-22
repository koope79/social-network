import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { "API-KEY": "be1cf177-45c6-4708-af1d-cdd43e7fddc5" }
});


export const friendsAPI = {
    getFriends(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    followFriend(uId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${uId}`)
            .then(response => {
                return response.data;
            });
    },
    unfollowFriend(uId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${uId}`)
        .then(response => {
            return response.data;
        });
    }
}

export const profileAPI = {
    getUser(userID) {
        return instance.get(`profile/` + userID)
            .then(response => {
                return response.data;
            });
    },
    getStatus(userID) {
        return instance.get(`profile/status/` + userID)
        .then(response => {
            return response.data;
        });
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
}

export const authAPI = {
    authUser() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    logIn(email, password, rememberMe = false, captcha = null) {                               // создание сессии
        return instance.post(`auth/login`, { email, password, rememberMe, captcha });
    },
    logOut() {                                                                 // удаление 
        return instance.delete(`auth/login`);
    },
    captcha() {
        return instance.get(`security/get-captcha-url`);
    }
}


