import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <Dialog name={d.name} userId={d.id}/>);
    let messageElements = props.state.messages.map(m => <Message message={m.message} time={m.timeStamp}/>);

    let newTextMessage = React.createRef();

    let addMessage = () => {
        let testMessage = newTextMessage.current.value;
        alert(testMessage);
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
                <div className={classes.addMessage}>
                    <div>
                        <textarea ref={newTextMessage}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;