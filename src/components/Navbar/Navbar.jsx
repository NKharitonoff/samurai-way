import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const Navbar = (props) => {

    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/news" style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/music" style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/users" style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>Users</NavLink>
            </div>
            <div className={classes.item}>
                <div className={classes.itemSettings}>
                    <NavLink to="/settings" style={({isActive}) => ({color: isActive ? 'gray' : 'white'})}>Settings</NavLink>
                </div>
            </div>
           <FriendsContainer />
        </nav>
    );
}

export default Navbar;
