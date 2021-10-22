import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = React.memo((props) => {
 
    let chooseChat = () => {
        alert('chooseChat, func: onClick');
    }

    return (
        <div className={s.dialog}>
            <div className={s.dialogAva}>
                <img src='https://avatarfiles.alphacoders.com/968/thumb-96848.png'></img>
            </div>
            <NavLink onClick={chooseChat} to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    );
});

export default DialogItem;