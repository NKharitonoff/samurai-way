import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

/*const DialogsContainer = (props) => {

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
}*/

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageTextActionCreator(body));
        }

    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;