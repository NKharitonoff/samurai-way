import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {

    let path = "/dialogs/" + props.userId;

    return (
        <div className={classes.dialogItem}>
            <img alt='alt' src='https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png' />
            <NavLink to={path} style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;