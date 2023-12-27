import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Vasya'},
        {id: 6, name: 'Natasha'}];

    let messages = [
        {id: 0, message: "Hi! How are you?", timeStamp: "26.12.2023 10:13:42"},
        {id: 1, message: "Hello! I'm fine!", timeStamp: "26.12.2023 10:15:02"},
        {id: 2, message: "Where are you from?", timeStamp: "26.12.2023 10:20:23"}];

    let dialogElements = dialogs.map( d => <Dialog name={d.name} userId={d.id} /> );

    let messageElements = messages.map(m => <Message message={m.message} time={m.timeStamp} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;