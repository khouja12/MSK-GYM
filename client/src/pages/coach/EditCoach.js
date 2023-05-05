import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./EditCoach.css";
import { Grid, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { editCoach } from "../../JS/Actions/coach";

function EditCoach({ id }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newCoach, setNewCoach] = useState({});
  
  const handleChange = (e) => {
    setNewCoach({ ...newCoach, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(editCoach(id, newCoach, handleClose));
  };

  return (
    <div>
      <Button className="cn" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EditCoach</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  placeholder="Enter name"
                  label=" Name"
                  variant="outlined"
                  fullWidth
                  required
                  name="name"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Enter email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  type="number"
                  placeholder="Enter phone number"
                  label="Phone"
                  variant="outlined"
                  fullWidth
                  required
                  name="phone"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleEdit} variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditCoach;
