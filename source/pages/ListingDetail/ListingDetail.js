import React from "react";
import './ListingDetail.css';

export default function ListingDetail(props) {
        return (
        <div className='listing-detail-container'>
            <h1 className='listing-detail-title'>{props.title}</h1>
            <h3 className="listing-detail-location">{props.location}</h3>
            <img className="listing-detail-img" src={props.images[0]}  alt="Image of home"/>
            <h4 className="listing-detail-host">{props.host}</h4>
        </div>
    );
}
