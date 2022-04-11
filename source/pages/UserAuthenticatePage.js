/**
 * Page that handles User sign in and account creation
 */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { createUser, signIn } from "../misc/auth/SignIn";
// TODO hide credentials

class UserAuthenticatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };

        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleSignUp(event) {
        event.preventDefault();
        createUser(this.state.email, this.state.password);
        // alert(`Here is the email: ${this.state.email} and here is the password: ${this.state.password}`);
    }

    handleSignIn(event) {
        alert(
            `Here is the email: ${this.state.email} and here is the password: ${this.state.password}`
        );
        signIn(this.state.email, this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <p>This Sign in Page</p>
                <Link to="/">Home</Link>
                <br />
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSignUp}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.email.value}
                            onChange={this.handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password.value}
                            onChange={this.handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={"button"}
                            type={"submit"}
                            value={"Sign Up"}
                        />
                    </div>
                </form>
                <br />
                <h1>Sign In</h1>
                <form onSubmit={this.handleSignIn}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={this.state.email.value}
                            onChange={this.handleEmailChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password.value}
                            onChange={this.handlePasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className={"button"}
                            type={"submit"}
                            value={"Sign In"}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default UserAuthenticatePage;
