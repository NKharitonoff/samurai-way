import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';

const Profile = (props) => {
    return (
        <div className={classes.content}>
            <img alt='123' className={classes.photo} src='https://kscopemusic.com/wp-content/uploads/2019/07/200-banner-gradient-1184x200.png' />
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;