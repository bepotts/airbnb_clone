import {Link} from "react-router-dom";
import React from "react";

// eslint-disable-next-line react/prop-types
const Action = function ({navTo, actionText}) {
    return (
        <>
            <Link to={navTo}>{actionText}</Link>
        </>
    );
};

export default Action;
