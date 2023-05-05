import React, { useState } from "react";
import "./SignIn.css";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import NavSignIn from "./NavSignIn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addMember } from "../../JS/Actions/member";

function SignIn  ()  {
  const [newMember, setNewMember] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewMember({ ...newMember, [e.target.name]: e.target.value });
  };

  const handleMember = (e) => {
    e.preventDefault();
    dispatch(addMember(newMember,navigate));
  };
  console.log(newMember)

  return (
    <div className="SignIn">
      <NavSignIn />
      <Typography
        gutterBottom
        variant="h3"
        color={"white"}
        marginTop={"1rem"}
        align="center"
      >
        inscription{" "}
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    placeholder="Enter first name"
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
                <Grid item xs={12}>
                  <TextField
                    label="password"
                    type="password"
                    placeholder="Type your password here"
                    variant="outlined"
                    fullWidth
                    required
                    name="password"
                    onChange={handleChange}

                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleMember}
                  >
                    {"submit "}
                    
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default SignIn;
