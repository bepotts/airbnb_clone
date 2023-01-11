/**
 * Home page of the application
 */
import React, { Component } from "react";
import Catalog from "../catalog/Catalog";
import "./HomePage.css";
import ActionBar from "../ActionBar/ActionBar";

class HomePage extends Component {
    render() {
        return (
            <>
                <div>
                    <p>This is the homepagee</p>
                    <ActionBar></ActionBar>
                </div>
                <div className="content-container">
                    <Catalog />
                </div>
            </>
        );
    }
}

export default HomePage;
