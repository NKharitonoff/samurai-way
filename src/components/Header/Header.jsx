import React from "react";
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img alt='789' src='http://www.logobook.com/wp-content/uploads/2019/02/Lift_London_logo-1.svg' />
        </header>
    );
}

export default Header;
