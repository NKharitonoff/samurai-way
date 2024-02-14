import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

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
                <div><img className={classes.userPhoto}
                          src={u.photos.small != null ? u.photos.small : userPhoto}/>
                </div>
                <div>{u.name}</div>
                <div>{u.status}</div>
                <div>u.location.country</div>
                <div>u.location.city</div>
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