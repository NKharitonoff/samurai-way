import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./friends-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: "It's my first post.", likesCount: 2},
                {id: 1, message: "It's my second post.", likesCount: 25},
                {id: 2, message: "It's my third post.", likesCount: 100},
                {id: 3, message: "It's my fourth post.", likesCount: 13},
                {id: 4, message: "It's my fifth post.", likesCount: 45}
            ],
            newPostText: 'it-kamasutra.com'
        },

        dialogsPage: {
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
        },

        navbar: {
            friends: [
                {id: 0, name: 'Jenya'},
                {id: 1, name: 'Sasha'},
                {id: 2, name: 'Tolya'}
            ]
        }
    },

    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbar = navbarReducer(this._state.navbar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;