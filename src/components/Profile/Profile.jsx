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
                <ProfileInfo ava='https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png' descr="Profile description"/>
                <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;