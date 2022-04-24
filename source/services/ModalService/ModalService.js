import ReactDOM from "react-dom";
import React from "react";
import '../../pages/GenericModal/GenericModal.css';
import GenericModal from "../../pages/GenericModal/GenericModal";

const createModalServiceSingleton = () => {
    // container and modals are wrapped in the closure
    const container = document.getElementById('portal-container');
    let modalRef = null;
    const openModal = (html) => {
        modalRef = ReactDOM.render(
            <GenericModal>
                {html}
            </GenericModal>,
            container
        );
    };
    const closeModal = () => {
        ReactDOM.unmountComponentAtNode(container);
    };
    return {
        openModal,
        closeModal
    }
}

export const modalService = createModalServiceSingleton();
