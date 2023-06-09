import React from "react";
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <img alt='123' className={classes.photo} src='https://kscopemusic.com/wp-content/uploads/2019/07/200-banner-gradient-1184x200.png' />
            <div>
                <img alt='345' className={classes.avatar} src='https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png' />
                +description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
            </div>
            <div>
                <div className={classes.item}>post1</div>
                <div className={classes.item}>post2</div>
                <div className={classes.item}>post3</div>
            </div>
        </div>
    );
}

export default Profile;