import React from 'react';
import s from './Friends.module.css';
import * as axios from 'axios';
import Ava from '../../assets/images/userAva.png';

const Friends = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                })
        }
    }


    return (
        <div className={s.content}>
        <button onClick={getUsers}>GetUsers</button>
            {   
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={s.friend}>
                            <img src={u.photos.small != null ? u.photos.small : Ava} />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { props.follow(u.id) }}>Follow</button>
                                : <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </div>)
            }
        </div>
    );
}

export default Friends;