import React from "react";
import Action from "../Action/Action";

const ActionBar = function () {
    return (
        <>
            <Action navTo={"/signIn"} actionText={"Sign In and Sign Up"}></Action>
        </>
    )
};
export default ActionBar;
