/**
 * Page that handles User sign in and account creation
 */
import React from "react";
import "./GenericModal.css";
import {modalService} from "../../services/ModalService/ModalService";

const GenericModal = (props) => {

    return (
        <div className="modal" onClick={() => modalService.closeModal()}>
            <div className="modal-content">
                {props.children}
            </div>
        </div>
    );
}

export default GenericModal;
