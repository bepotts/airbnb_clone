/**
 * Page that handles User sign in and account creation
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class UserAuthenticatePage extends Component {
    render() {
        return (
            <div>
                <p>This Sign in Page</p>
                <Link to="/">Home</Link>
            </div>
        );
    }
}

export default UserAuthenticatePage;
