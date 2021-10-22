import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import ChatForm from './Chat/ChatForm';


const Dialogs = (props) => {

    let dialogsElement = props.dialogsData.map((d) => (<DialogItem key={d.id} name={d.name} id={d.id} />));   // преобразование входящих данных из объекта
    let messagesElement = props.messagesData.map((m) => (<MessageItem key={m.id} text={m.text} />));

    return (
        <div className={s.content}>

            <div className={s.dialogs}>

                <div className={s.dialogsItems}>

                    {dialogsElement}

                </div>

                <div className={s.messages}>

                    {messagesElement}

                </div>

                <div className={s.chat}>
                    {/* <Chat newMessageBody={props.newMessageBody} 
                          chatSendMessage={props.chatSendMessage} 
                          chatNewMessageBodyChange={props.chatNewMessageBodyChange}/> */}
                          <ChatForm reset={props.reset} sendMessageAC={props.sendMessageAC}/>
                </div>

            </div>

        </div>
    );
}

export default Dialogs;