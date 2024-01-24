import React from 'react';
import Navbar from "../Navbar";
import {connect} from "react-redux";

/*const NavbarContainer = (props) => {

    let state = props.store.getState().navbar.friends;

    return <Navbar friends={state}/>

}*/

const mapStateToProps = (state) => {
    return {
        friends: state.navbar.friends
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;