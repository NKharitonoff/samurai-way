import React from 'react';
import classes from "./Message.module.css";

const Message = (props) => {
    return (
        <div className={classes.message}>
            <div className={classes.messageText}>
                {props.message}
            </div>
            <div className={classes.time}>
                {props.time}
            </div>
        </div>
    );
}

export default Message;