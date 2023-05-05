import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import "./TarifPages.css";
import Button from "@mui/material/Button";
import LandBar from "../../components/LandingPagesComponents/LandBar";
import FooterBottom from "../../components/footer/FooterBottom";
export default function TarifPages() {
  return (
    <div className="fullpages">
      <LandBar />

      <Grid className="boxs" container>
        <Box
          className="box"
          sx={{
            p: 2,
            bgcolor: "primary.main",
            height: "70vh",
            width: "70vh",
          }}
        >
          <h1> Abonnement 6 mois</h1>
          <h2> Accés illimité</h2>
          <p> 06:00-21:00</p>
          <div className="b2">
            <p
              style={{
                fontSize: "30px ",
                borderTop: "4px black dashed",
                padding: "20px",
              }}
            >
              720dt
            </p>

            <div>
              <span>
                espace cardio training <br />
                espace musculation <br />
                espace fitness
              </span>
            </div>
            <p>
              <b>120</b>
              <sup>dt</sup>
              <b>/mois</b>
            </p>
            <Button className="sbtn" variant="contained">
              S'abonner
            </Button>
          </div>
        </Box>
        <Box
          className="box"
          sx={{
            p: 2,
            bgcolor: "secondary.main",
            height: "70vh",
            width: "70vh",
          }}
        >
          <h1> Abonnement 12 mois </h1>
          <h2> Accés illimité</h2>
          <p> 06:00-21:00</p>
          <div className="b2">
            <p
              style={{
                fontSize: "30px ",
                borderTop: "4px black dashed",
                padding: "20px",
              }}
            >
              {" "}
              950dt
            </p>

            <div>
              <span>
                espace cardio training <br />
                espace musculation <br />
                espace fitness
              </span>
            </div>

            <p>
              <b>79</b>
              <sup>dt</sup>
              <b>/mois</b>
            </p>

            <Button className="sbtn" variant="contained">
              S'abonner
            </Button>
          </div>
        </Box>
      </Grid>
      <FooterBottom />
    </div>
  );
}
