import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
    return (
        <div className={classes.friendItem}>
            <div className={classes.ava}>
                <img alt='456' src='https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png' />
            </div>
            {props.name}
        </div>
    );
}

export default Friend;