import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
    return (
        <div>
            <div>
                My posts
            </div>
            <div>
                <textarea>Add post</textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post message={'Hi, how are you?'} likecounts = ' 20' />
                <Post message={'It is my first post.'} likecounts = ' 15' />
            </div>
        </div>
    );
}

export default MyPosts;
