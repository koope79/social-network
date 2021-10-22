import React from 'react';
import s from './Friends.module.css';
import Ava from '../../assets/images/userAva.png';
import Preloader from '../common/preloaders/Preloader';
import { NavLink } from 'react-router-dom';


const Friend = ({user, ...props}) => {

    return (
        <div className={s.item}>

            <span>
                <div className={s.friend}>
                    <NavLink to={'/profile/' + user.id}>
                        {props.isFetching ? <Preloader /> : <img src={user.photos.small != null ? user.photos.small : Ava} />}
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.followThunk(user.id);
                        }}>Follow</button>

                        : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                            props.unfollowThunk(user.id);
                        }}>Unfollow</button>
                    }
                </div>
            </span>
            <span>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </span>
            {/* <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
            </span> */}

        </div>
    );
}



export default Friend;