import React from "react";
import s from './../Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';


const Chat = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        
            <div>
                <Field name={"chatTextArea"} placeholder='Enter ur message' component={"textarea"}/>
                <button>SEND</button>
            </div>

        </form>
    );
}

const ChatReduxForm = reduxForm({form: 'chatForm'}) (Chat);  // hoc

const ChatForm = (props) => {

    const onSubmit = (formData) => {
        props.sendMessageAC(formData.chatTextArea);
        props.reset('chatForm');
    }
    
    return (
        <div className={s.chatElem}>
            <ChatReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

export default ChatForm;
