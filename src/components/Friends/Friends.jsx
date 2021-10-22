import React from 'react';
import s from './Friends.module.css';
import Paginator from '../common/Paginator/Paginator';
import Friend from './Friend';


const Friends = (props) => {

    return (
        <div className={s.content}>

            <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                currentPage={props.currentPage} onPageChanged={props.onPageChanged} />
            {
                props.users.map(u => <Friend key={u.id} user={u} followingInProgress={props.followingInProgress}
                    followThunk={props.followThunk} unfollowThunk={props.unfollowThunk} isFetching={props.isFetching} />)
            }

        </div>
    );
}



export default Friends;