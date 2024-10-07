import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const MyModal = ({ show, handleClose, content }) => {
     

    return (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Respuesta del Servidor</Modal.Title>
          </Modal.Header>
          <Modal.Body>{content}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      );
};

export default MyModal;
