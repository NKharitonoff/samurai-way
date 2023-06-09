import React from "react";
import classes from  './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <a href="https://github.com">Profile</a>
            </div>
            <div className={classes.item}>
                <a href="https://github.com">Messages</a>
            </div>
            <div className={classes.item}>
                <a href="https://github.com">News</a>
            </div>
            <div className={classes.item}>
                <a href="https://github.com">Music</a>
            </div>
            <div className={classes.item}>
                <a href="https://github.com">Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;
