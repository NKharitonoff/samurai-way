import React from "react";
import classes from './Friends.module.css';
import Friend from "./Friend/Friend";

let Friends = (props) => {

    if (props.friends.length === 0) {
        props.setFriends([
            {id: 0, name: 'Jenya'},
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Tolya'}
        ])
    }

    return <div>
        <div className={classes.friendsTitle}>Friends</div>
        <div className={classes.friendItems}>
            {props.friends.map(f => <Friend key={f.id} name={f.name}/>)}
        </div>
    </div>
}

export default Friends;