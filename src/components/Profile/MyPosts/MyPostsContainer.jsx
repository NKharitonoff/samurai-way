import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = (props) => {

    /*let state = props.store.getState().profilePage;

    let onAddPostClick = () => {
        let action = addPostActionCreator();
        props.store.dispatch(action);
    }

    let onNewPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return <MyPosts profilePage={state}
                    addPost={onAddPostClick}
                    updateNewPostText={onNewPostChange}/>*/

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState().profilePage;

                let onAddPostClick = () => {
                    let action = addPostActionCreator();
                    store.dispatch(action);
                }

                let onNewPostChange = (text) => {
                    let action = updateNewPostTextActionCreator(text);
                    store.dispatch(action);
                }

                return <MyPosts profilePage={state} addPost={onAddPostClick} updateNewPostText={onNewPostChange}/>
            }
            }
        </StoreContext.Consumer>
    );
}

export default MyPostsContainer;
