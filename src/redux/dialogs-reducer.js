const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                message: state.newMessageText,
                timeStamp: "20.01.2024 9:42:13"
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.typeText;
            return state;
        default: return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, typeText: text});

export default dialogsReducer;