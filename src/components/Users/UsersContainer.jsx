import React from "react";
import {setUsersAC, followAC, unfollowAC} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        onFollow: (userID) => {
            dispatch(followAC(userID));
        },
        onUnfollow: (userID) => {
            dispatch(unfollowAC(userID));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;