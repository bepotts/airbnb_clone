/**
 * Page that handles User sign in and account creation
 */
import React, {useEffect, useState} from "react";
import Listing from "../listing/Listing";
import './Catalog.css';

function Catalog() {
        const [data, setData] = useState([]);
        const getData=()=>{
            fetch('state/listings.json'
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
                            <Listing key={listing.listingId} {...listing} />
                        );
                    })
                }
            </div>
        );
}

export default Catalog;
