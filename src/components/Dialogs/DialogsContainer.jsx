import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        let acton = sendMessageActionCreator();
        props.store.dispatch(acton);
    }

    let onNewMessageChange = (body) => {
        let action = updateNewMessageTextActionCreator(body);
        props.store.dispatch(action);
    }

    return (<Dialogs dialogsPage={state}
                     sendMessage={onSendMessageClick}
                     updateNewMessageBody={onNewMessageChange} />);
}

export default DialogsContainer;