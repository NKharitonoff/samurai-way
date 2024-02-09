import React from 'react';
import Friends from "./Friends";
import {setFriendsAC} from "../../../redux/friends-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friends: state.navbarFriends.friends
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFriends: (friends) => {
            dispatch(setFriendsAC(friends))
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsContainer;