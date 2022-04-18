import ReactDOM from "react-dom";
import React from "react";
import '../../pages/GenericModal/GenericModal.css';
import GenericModal from "../../pages/GenericModal/GenericModal";

const createModalServiceSingleton = () => {
    // container and modals are wrapped in the closure
    const container = document.querySelector('#portal-container');
    const modals = {};
    const openModal = (className, html) => {
        const node = document.createElement('div');
        // is this class hiding it?
        // node.setAttribute('className', 'medal');
        container.appendChild(node);
        ReactDOM.render(
            <GenericModal>
                {html}
            </GenericModal>,
            node
        );
    };
    const closeModal = (className) => {
    };
    return {
        openModal,
        closeModal
    }
}

export const modalService = createModalServiceSingleton();
