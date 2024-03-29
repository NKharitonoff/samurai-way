const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let ititialState = {
    posts: [
        {id: 0, message: "It's my first post.", likesCount: 2},
        {id: 1, message: "It's my second post.", likesCount: 25},
        {id: 2, message: "It's my third post.", likesCount: 100},
        {id: 3, message: "It's my fourth post.", likesCount: 13},
        {id: 4, message: "It's my fifth post.", likesCount: 45}
    ],
        newPostText: 'it-kamasutra.com'
}

const profileReducer = (state = ititialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT:

            return {
                ...state,
                newPostText: action.newPostText
            }

        default: return state;
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newPostText: text});

export default profileReducer;