import React from 'react';
import s from './../Dialogs.module.css';

const MessageItem = React.memo((props) => {
    return (
        <div className={s.message}>{props.text}</div>
    );
});

export default MessageItem;