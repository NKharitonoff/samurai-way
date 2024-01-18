import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogElements = state.dialogs.map(d => <Dialog name={d.name} userId={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} time={m.timeStamp}/>);
    let newMessageText = state.newMessageText;

    let onMessageSend = () => {
        props.sendMessage();
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div className={classes.sendMessage}>
                    <div>
                        <textarea placeholder="Type new message"
                                  onChange={onMessageChange}
                                  value={newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onMessageSend}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;