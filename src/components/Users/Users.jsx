import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

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
                <div>{
                    u.followed
                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            followAPI.unfollow(u.id).then(data => {
                                if (data.resultCode == 0) {
                                    props.unfollow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }}>Unfollow</button>
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            followAPI.follow(u.id).then(data => {
                                if (data.resultCode == 0) {
                                    props.follow(u.id);
                                }
                                props.toggleFollowingProgress(false, u.id);
                            });
                        }}>Follow</button>
                }</div>
            </div>)
        }
    </div>
}

export default Users;