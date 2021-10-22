import React from 'react';
import s from './../Dialogs.module.css';

const Chat = (props) => {

    let onSendMessage = () => {
      props.chatSendMessage();
    }

    let newMessage = React.createRef();
    let onNewMessageBodyChange = () => {
        let body = newMessage.current.value;
        props.chatNewMessageBodyChange(body);
    }

    return (
        <div className={s.chatElem}>
            <textarea onChange={onNewMessageBodyChange} ref={newMessage} value={props.newMessageBody} placeholder='Enter ur message'></textarea>
            <button onClick={onSendMessage}>Send</button>
            {/* <div className={s.textbox} role="textbox" aria-multiline="true" contenteditable="true"></div> */}
        </div>
    );
}

export default Chat;