import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./LogIn.css";
import { loginMember } from "../../JS/Actions/member";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
function LogIn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Member, setMember] = useState({});

  const handleChange = (e) => {
    setMember({ ...Member, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleMember = (e) => {
    e.preventDefault();
    dispatch(loginMember(Member, navigate));
  };
  return (
    <div>
      <p className="cnx" onClick={handleShow}>
        Connexion
      </p>

      <Modal  show={show} onHide={handleClose}>
          <Modal.Title className="cnx1" >Connexion</Modal.Title>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={handleChange}  name="password"  type="password" placeholder="Password" />
            </Form.Group>

            <a href="" className="mdpo" style={{ color: "red " }}>
              {" "}
              Mot De Passe Oublié ?{" "}
            </a>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <a href="SignIn" className="inscri-log">
            {" "}
            Inscription
          </a>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleMember}  variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LogIn;
