import React from 'react';
import classes from "./Users.module.css";

let Users = (props) => {

    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 0,
                followed: false,
                fullName: 'Dmitry',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 1,
                followed: true,
                fullName: 'Sasha',
                status: 'I am a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                followed: false,
                fullName: 'Andrew',
                status: 'I am a boss too',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
        ])
    }

    return <div>
        {
            props.users.map(u => <div className={classes.user} key={u.id}>
                <div><img className={classes.userPhoto} src='https://cdn.icon-icons.com/icons2/1812/PNG/512/4213460-account-avatar-head-person-profile-user_115386.png' /></div>
                <div>{u.fullName}</div>
                <div>{u.status}</div>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div>
                <div>{
                    u.followed
                        ? <button onClick={ () => { props.onUnfollow(u.id) } }>Unfollow</button>
                        : <button onClick={ () => { props.onFollow(u.id) } }>Follow</button>
                }</div>
            </div>)
        }
    </div>
}

export default Users;