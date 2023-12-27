import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Vasya'},
        {id: 6, name: 'Natasha'}
    ];

    let messageData = [
        {
            id: 0,
            timeStamp: "26.12.2023 10:13:42",
            message: "Hi! How are you?"
        },
        {
            id: 1,
            timeStamp: "26.12.2023 10:15:02",
            message: "Hello! I'm fine!"
        },
        {
            id: 2,
            timeStamp: "26.12.2023 10:20:23",
            message: "Where are you from?"
        }
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <Dialog name={dialogsData[0].name} userId={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} userId={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} userId={dialogsData[2].id}/>
                <Dialog name={dialogsData[3].name} userId={dialogsData[3].id}/>
                <Dialog name={dialogsData[4].name} userId={dialogsData[4].id}/>
                <Dialog name={dialogsData[5].name} userId={dialogsData[5].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message} time={messageData[0].timeStamp}/>
                <Message message={messageData[1].message} time={messageData[1].timeStamp}/>
                <Message message={messageData[2].message} time={messageData[2].timeStamp}/>
            </div>
        </div>
    );
}

export default Dialogs;