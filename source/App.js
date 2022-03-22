/**
 * Main component for the application
 */

import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UserAuthenticatePage from "./pages/UserAuthenticatePage";

import "./styles/main.css";

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signIn" element={<UserAuthenticatePage />} />
            </Routes>
        );
    }
}

export default App;
