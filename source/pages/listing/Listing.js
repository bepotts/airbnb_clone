
import React, {Component, useState} from "react";
import './Listing.css';
import {modalService} from "../../services/ModalService/ModalService";
import ListingDetail from "../ListingDetail/ListingDetail";
import GenericModal from "../GenericModal/GenericModal";

const Listing = (props) => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="listing" onClick={() => modalService.openModal(ListingDetail.name, <ListingDetail />)}>
                <h1 className="listing-title">{props.title}</h1>
                <h3 className="listing-location">{props.location}</h3>
                <img className="listing-img" src={props.images[0]}  alt="Image of home"/>
                <h4 className="listing-host">{props.host}</h4>
            </div>
            {/*<GenericModal show={show} ><ListingDetail /></GenericModal>*/}
        </>
    );
}

export default Listing;
