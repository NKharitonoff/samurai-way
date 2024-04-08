import React from "react";
import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.profilePhoto}>
                <img alt='123' src='https://kscopemusic.com/wp-content/uploads/2019/07/200-banner-gradient-1184x200.png'/>
            </div>
            <div>
                <img src={props.profile.photos.large} />

            </div>
        </div>
    );
}

export default ProfileInfo;