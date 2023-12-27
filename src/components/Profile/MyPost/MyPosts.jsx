import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postData = [
        {
            id: 0,
            message: "It is my first post.",
            likesCount: 2
        },
        {
            id: 1,
            message: "It's my second post.",
            likesCount: 25
        }
    ];

    return (
        <div>
            <div>
                <h4>My posts</h4>
            </div>
            <div>
                <div>
                    <textarea>Add post</textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;
