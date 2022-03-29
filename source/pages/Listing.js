
import React, { Component } from "react";

class Listing extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="listing">
                <h1>{this.props.title}</h1>
                <h3>{this.props.location}</h3>
                <img src={this.props.images[0]}  alt="Image of home"/>
                <h4>{this.props.host}</h4>
            </div>
        );
    }
}

export default Listing;
