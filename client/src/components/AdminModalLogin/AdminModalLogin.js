import { ModalManager } from "@mui/material";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import './AdminModalLogIn.css'
function AdminModalLogin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ppp" >
      <strong  className="btn-admin-log"  onClick={handleShow}>
        Connexion Admin
      </strong>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Connexion Admin </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <a href="" style={{color:'red '}}> Mot De Passe Oublié ?  </a>
          </Form>
        </Modal.Body>
        <Modal.Footer>
        <a href="SignIn"  className="inscri-log"> Inscription</a>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit">
              Submit
            </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AdminModalLogin;
