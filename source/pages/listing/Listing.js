import React, { Component } from "react";
import "./Listing.css";

class Listing extends Component {
    constructor(props) {
        console.log(props);
        super(props);
    }
    render() {
        return (
            <div className="listing">
                <h1 className="listing-title">{this.props.title}</h1>
                <h3 className="listing-location">{this.props.location}</h3>
                <img
                    className="listing-img"
                    src={this.props.images[0]}
                    alt="Image of home"
                />
                <h4 className="listing-host">{this.props.host}</h4>
            </div>
        );
    }
}

export default Listing;
