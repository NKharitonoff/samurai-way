import React from 'react';
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

let Users = (props) => {

    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }

    return <div>
        {
            props.users.map(u => <div className={classes.user} key={u.id}>
                <div><img className={ classes.userPhoto }
                          src={ u.photos.small != null ? u.photos.small : userPhoto } />
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
{/*                <div>{u.location.country}</div>
                <div>{u.location.city}</div>*/}
                <div>{
                    u.followed
                        ? <button onClick={() => {
                            props.onUnfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.onFollow(u.id)
                        }}>Follow</button>
                }</div>
            </div>)
        }
    </div>
}

export default Users;