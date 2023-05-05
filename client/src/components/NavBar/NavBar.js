import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./NavBar.css";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";

export default function NavBar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogout = () => {
  };
  const isAuth = useSelector(state => state.memberReducer.isAuth )

  return (
    <div >
      <div className="sidenav">
        <a href="/admin">Dashbored</a>
        <a href="/MemberAdmin">Member</a>
        <a href="/Coach">Coach</a>
        <a href="#contact">Payement</a>

        <Avatar className="log-btn" onClick={toggleMenu}  > <img src="data:image/png;base64,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" /> </Avatar>
        {isExpanded && (
          <div className="menu">
            
            <ul>

              <a href="/"  className="log-out-sidebar">Se déconnecter</a>
            </ul>
          </div>
        )}
      
        </div>
    </div>
  );
}
