import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogElements = state.dialogs.map(d => <Dialog name={d.name} userId={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} time={m.timeStamp}/>);
    let newMessageText = state.newMessageText;

    /*let newMessageElement = React.createRef();*/

    let sendMessage = () => {
        /*let testMessage = newMessageElement
       .current.value;
        alert(testMessage);*/
        props.store.dispatch(sendMessageActionCreator());
    }

    let onMessageChange = (e) => {
        /*let text = newMessageElement.current.value;*/
        let text = e.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(text));
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
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;