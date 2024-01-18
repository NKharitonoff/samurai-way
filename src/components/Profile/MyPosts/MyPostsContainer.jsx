import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {

    let state = props.store.getState().profilePage;

    let onAddPostClick = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let onNewPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts profilePage={state}
                 addPost={onAddPostClick}
                 updateNewPostText={onNewPostChange}/>);
}

export default MyPostsContainer;
