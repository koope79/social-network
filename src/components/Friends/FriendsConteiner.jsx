import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {getUsersThunk, setCurrentPageAC, followThunk, unfollowThunk } from '../../redux/Friends-reducer';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsersData } from '../../redux/Friends-selectors';
import Friends from './Friends';


const mapStateToProps = (state) => {
    return {
        users: getUsersData(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

class FriendsComponent extends React.Component {

    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPageAC(pageNumber);
        this.props.getUsersThunk(pageNumber, this.props.pageSize);
    }

    render() {
        return <Friends totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            isFetching={this.props.isFetching}
            followingInProgress={this.props.followingInProgress} 
            followThunk = {this.props.followThunk}
            unfollowThunk = {this.props.unfollowThunk}/>
    }
}

// const FriendsContainer = connect(mapStateToProps, 
//     {setCurrentPageAC, getUsersThunk, followThunk, unfollowThunk})(FriendsComponent);

export default compose(connect(mapStateToProps, 
    {setCurrentPageAC, getUsersThunk, followThunk, unfollowThunk}))
(FriendsComponent);









// const mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followedAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowedAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching));
//         },
//         toggleFollowingProgress: (isFetching, userID) => {
//             dispatch(toggleFollowingProgress(isFetching, userID))
//         }
//     }
// }