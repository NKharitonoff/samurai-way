import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPost/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <div className={classes.profilePhoto}>
                <img alt='123' src='https://kscopemusic.com/wp-content/uploads/2019/07/200-banner-gradient-1184x200.png'/>
            </div>
            <div className={classes.profileContent}>
                <ProfileInfo/>
                <MyPosts/>
            </div>
        </div>
    );
}

export default Profile;