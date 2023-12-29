import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return(
        <div className={classes.item}>
            <img alt='456' src='https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png' />
            { props.message }
            <div>
                <span>like </span>
                { props.likesCount }
            </div>
        </div>
    );
}

export default Post;