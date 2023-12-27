import React from 'react';
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let posts = [
        {id: 0, message: "It's my first post.", likesCount: 2},
        {id: 1, message: "It's my second post.", likesCount: 25},
        {id: 1, message: "It's my third post.", likesCount: 100},
        {id: 1, message: "It's my four post.", likesCount: 13},
    ];

    let postElements = posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

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
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;
