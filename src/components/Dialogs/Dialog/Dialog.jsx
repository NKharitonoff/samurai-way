import React from 'react';
import classes from './Dialog.module.css';
import {NavLink} from "react-router-dom";

const Dialog = (props) => {

    let path = "/dialogs" + props.userId

    return (
        <div className={classes.dialogItem}>
            <NavLink to={path} style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;