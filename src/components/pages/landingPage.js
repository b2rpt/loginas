import React from "react";
import Grid from "@material-ui/core/Grid";
import { Box, Typography } from "@material-ui/core";
import { Link, NavLink } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          xs={6}
          style={{ backgroundColor: "#020C53", height: "100vh" }}
        >
          <Box>
            <div
              style={{
                display: "flex",
                marginTop: "40vh",
                justifyContent: "center",
              }}
            >
              <div>
                <Typography
                  component="div"
                  style={{
                    backgroundColor: "#FFCA3D",
                    height: "10vh",
                    width: "10vh",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <Typography
                variant="h2"
                style={{
                  display: "flex",
                  color: "#FFCA3D",
                  margin: "-40px 0 0 10px",
                  fontFamily: "Montserrat",
                  alignItems: "center",
                }}
              >
                maidIN
              </Typography>
            </div>
            <span>
              <Typography
                variant="h5"
                style={{ color: "#FFCA3D", margin: "-32px 0 0 10px" }}
              >
                get maid easy
              </Typography>
            </span>
          </Box>
        </Grid>

        {/* <Divider orientation='vertical'></Divider> */}

        <Grid
          item
          xs={6}
          style={{ backgroundColor: "#FFCA3D", height: "100vh" }}
        >
          <Box>
            <nav
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                letterSpacing: "0px",
                fontFamily: "Montserrat",
                minHeight: "6vh",
                backgroundColor: "rgba(100, 100, 100, 0.01)",
              }}
            >
              <div style={{ color: "#020C53" }}>maidIN</div>
              <ui
                style={{
                  display: "flex",
                  letterSpacing: "2px",
                  fontFamily: "Helvetica",
                  listStyle: "none",
                  justifyContent: "space-around",
                  width: "50%",
                  cursor: "pointer",
                }}
              >
                <li>
                  <NavLink
                    to="/home"
                    style={{ textDecoration: "none", color: "#fafafa" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "#fafafa" }}
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "#fafafa" }}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/signin"
                    style={{ textDecoration: "none", color: "#fafafa" }}
                  >
                    Login
                  </NavLink>
                </li>
              </ui>
            </nav>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "35vh",
                padding: "30px",
              }}
            >
              <p>
                This is where you can get cook around your location and that too
                as per you requirments as we provide all the detials. You can
                diectly contect them and ask for what you are looking for
                exectly. Though we provide you all the basic information such as
                food experties, toatal experince, timings etc. But yes you have
                all the option to chosse accornding to your wish.
              </p>
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
