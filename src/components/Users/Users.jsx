import React from "react";
import classes from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/user.png";

class Users extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <div>
            {
                this.props.users.map(u => <div className={classes.user} key={u.id}>
                    <div><img className={classes.userPhoto}
                              src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    {/*<div>{u.location.country}</div>
                    <div>{u.location.city}</div>*/}
                    <div>{
                        u.followed
                            ? <button onClick={() => {
                                this.props.onUnfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.onFollow(u.id)
                            }}>Follow</button>
                    }</div>
                </div>)
            }
        </div>
    }
}

export default Users;