import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import Chat from './Chat/Chat';

class DialogsC extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
        <div className={s.content}>

            <div className={s.dialogs}>

                <div className={s.dialogsItems}>

                    {this.props.dialogsData.map((d) => (<DialogItem key={d.id} name={d.name} id={d.id} />))}

                    {/* <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                    <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                    <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                    <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} /> */}


                </div>

                <div className={s.messages}>

                    {this.props.messagesData.map((m) => (<MessageItem key={m.id} text={m.text} />))}

                </div>

                <div className={s.chat}>
                    <Chat newMessageBody={this.props.newMessageBody} 
                          chatSendMessage={this.props.chatSendMessage} 
                          chatNewMessageBodyChange={this.props.chatNewMessageBodyChange}/>
                </div>

            </div>

        </div>
        );
    }
}

export default DialogsC;