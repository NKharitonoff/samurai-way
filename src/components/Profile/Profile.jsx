import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={classes.profilePhoto}>
                <img alt='123' src='https://kscopemusic.com/wp-content/uploads/2019/07/200-banner-gradient-1184x200.png'/>
            </div>
            <div className={classes.profileContent}>
                <ProfileInfo profile={props.profile}/>
                <MyPostsContainer/>
            </div>

        </div>

    );
}

export default Profile;