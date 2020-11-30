import React, { useEffect } from "react";
import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { Controls } from "../../components/controls/controls";
import HeaderNlogo from "../pages/headerNlogo";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "80vh",
    width: "150vh",
  },
  Paper: {
    margin: "40px 70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/1600x900/?cook)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const initialValues = {
  email: "",
};

export default function ForgotPassword(props) {
  const classes = useStyle();
  const { values, handleChange } = useForm(initialValues);

  useEffect(() => {
    // console.log("values", values)
    // console.log("values==", values.fullName);
    console.log("props->", props);
  }, []);

  return (
    <>
      <Card>
        <Grid container component="main">
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            // component={Paper}
            elevation={6}
            square
            className={classes.root}
          >
            <div className={classes.Paper}>
              <HeaderNlogo />
              <span style={{marginTop:'100px'}}>
                <Controls.Form style={{ marginTop: "100px" }}>
                  <Controls.Input
                    type="email"
                    value={values.email}
                    name="email"
                    margin="normal"
                    label="Email"
                    onChange={handleChange}
                    autoComplete="email"
                  />
                  <Controls.Button label="RESET PASSWORD" type="submit" fullWidth />
                </Controls.Form>
              </span>
            </div>

            <div style={{marginTop:'150px'}}>
              <Typography variant="body2">
                <NavLink
                  to="/signin"
                  exact
                  style={{ textDecoration: "none" }}
                  activeClassName="activeSignUp"
                  activeStyle={{ color: "orange", textDecoration: "underline" }}
                >
                  got your password back? Sign In
                </NavLink>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
      </Card>
    </>
  );
}
