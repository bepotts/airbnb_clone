/**
 * Page that handles User sign in and account creation
 */
import React, {useEffect, useState} from "react";
import "./GenericModal.css";

const GenericModal = (props) => {

    return (
        <div className="modal">
            <div className="modal-content">
            {props.children}
            </div>
        </div>
    );
}

export default GenericModal;
