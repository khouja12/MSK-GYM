import React from "react";
import "./Footer.css";
import AdminModalLogin from "../AdminModalLogin/AdminModalLogin";
import { Button } from "@mui/material";

const FooterBottom = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h3>About Us</h3>
              <p>
                MM GYM Gym, The land of fitness, est la Première chaîne de clubs
                de fitness en Tunisie avec 10 clubs répartis sur le Grand Tunis.
              </p>
            </div>
            <div className="col-md-4">
              <h3>Opening Hours</h3>
              <ul className="list-unstyled">
                <li>Monday - Friday: 6am - 9pm</li>
                <li>Saturday: 8am - 5pm</li>
                <li>Sunday: 10am - 4pm</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h3>Contact Us</h3>
              <p>
                123 Main Street
                <br />
                City, State Zip
                <br />
                (123) 456-7890
                <br />
                info@gym.com
              </p>
            </div>
            <div>
            <Button variant="text"><AdminModalLogin /></Button>

            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FooterBottom;
