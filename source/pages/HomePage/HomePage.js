/**
 * Home page of the application
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Catalog from "../catalog/Catalog";

class HomePage extends Component {
    render() {
        return (
            <>
                <div>
                    <p>This is the homepage</p>
                    <Link to="/signIn">Sign In and Sign Up</Link>
                </div>
                <div className="content-container">
                    <Catalog />
                </div>
            </>
        );
    }
}

export default HomePage;
