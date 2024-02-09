const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let ititialState = {
    dialogs: [
        {id: 0, name: 'Tanya'},
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Dasha'},
        {id: 5, name: 'Vasya'},
        {id: 6, name: 'Natasha'},
        {id: 7, name: 'Kolya'}
    ],

    messages: [
        {id: 0, message: "Hi! How are you?", timeStamp: "26.12.2023 10:13:42"},
        {id: 1, message: "Hello! I'm fine!", timeStamp: "26.12.2023 10:15:02"},
        {id: 2, message: "Where are you from?", timeStamp: "26.12.2023 10:20:23"},
        {id: 3, message: "Hey!", timeStamp: "27.12.2023 15:00:03"}
    ],
    newMessageText: ""
};

const dialogsReducer = (state = ititialState, action) => {
    switch (action.type){
        case SEND_MESSAGE: {
            let newMessage = {
                id: 4,
                message: state.newMessageText,
                timeStamp: "20.01.2024 9:42:13"
            };

            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        }

        case UPDATE_NEW_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.typeText
            }

        default: return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, typeText: text});

export default dialogsReducer;