import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src={props.ava} />
                {props.descr}
            </div>
        </div>
    );
}

export default ProfileInfo;