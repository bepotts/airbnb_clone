/**
 * Page that handles User sign in and account creation
 */
import React, { Component } from "react";
import fs from "fs";
import path from "path";
import Listing from "./Listing";

class Catalog extends Component {
    listings = [];
    constructor(props) {
        super(props);
        this.listings = fs.readFileSync(path.join(__dirname, "../../resources/listings.json"));
    }
    render() {
        const listings = this.listings.map((listing) => {
            return (
                <div key={listing.id}>
                    <Listing props={{...listing}} />
                </div>
            );
        })
        return (
            <div id="listing-container">
                {listings}
            </div>
        );
    }
}

export default Catalog;
