import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import axios from "axios";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && classes.selectedPage}
                                 onClick={() => {
                                     props.onPageChanged(p)
                                 }}
                                 style={{cursor: 'pointer'}}>{p}</span>
                })
            }
        </div>
        {
            props.users.map(u => <div className={classes.user} key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img alt="ava" className={classes.userPhoto}
                             src={u.photos.small != null ? u.photos.small : userPhoto}/>
                    </NavLink>
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>u.location.country</div>
                <div>u.location.city</div>
                <div>{
                    u.followed
                        ? <button onClick={() => {
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "1693778f-087f-476d-9db1-78b05baeb7bd"
                                    }
                                }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.unfollow(u.id);
                                }
                            });
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "1693778f-087f-476d-9db1-78b05baeb7bd"
                                    }
                                }).then(response => {
                                if (response.data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                            });
                        }}>Follow</button>
                }</div>
            </div>)
        }
    </div>
}

export default Users;