export const getUsersData = (state) => {
    return state.friendsPage.usersData;
}

export const getPageSize = (state) => {
    return state.friendsPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.friendsPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.friendsPage.currentPage;
}

export const getIsFetching = (state) => {
    return state.friendsPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.friendsPage.followingInProgress;
}
