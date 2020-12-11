import {Modal, Button }from "react-bootstrap";
import React from 'react';

function ModalImage({image, hide}) {
    return (
        <Modal
            show={true}
            onHide={hide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body onClick={hide}>
              <img className='h-100 w-100' src={image} />
            </Modal.Body>
        </Modal>
    );
}

export default ModalImage;
