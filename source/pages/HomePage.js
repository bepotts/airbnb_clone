/**
 * Home page of the application
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <p>This is the homepage</p>
                <Link to="/signIn">Sign In and Sign Up</Link>
            </div>
        );
    }
}

export default HomePage;
