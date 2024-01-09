import React from "react";
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

    let friendElements = props.friends.map(f => <Friend id={f.id} name={f.name}/>);
    return(
        <div>
            <div className={classes.friendsTitle}>Friends</div>
            <div className={classes.friendItems}>
                {friendElements}
            </div>
        </div>
    );
}

export default Friends;