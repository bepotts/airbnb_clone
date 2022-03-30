/**
 * Page that handles User sign in and account creation
 */
import React, {Component, useEffect, useState} from "react";
import Listing from "./Listing";

function Catalog() {
        const [data, setData]=useState([]);
        const getData=()=>{
            fetch('listings.json'
                ,{
                    headers : {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then((response) => {
                    return response.json();
                })
                .then((myJson) => {
                    setData(myJson)
                });
        };
        useEffect(()=>{
            getData()
        },[]);
        return (
            <div id="listing-container">
                {
                    data && data.length > 0 && data.map((listing) => {
                        return (
                            <div key={listing.listingId}>
                                <Listing {...listing} />
                            </div>
                        );
                    })
                }
            </div>
        );
}

export default Catalog;
