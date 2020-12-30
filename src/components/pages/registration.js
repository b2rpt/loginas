import React, { useEffect } from "react";
import {
  Card,
  Grid,
  makeStyles,
  Link,
  Typography,
  Paper,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { Controls } from "../../components/controls/controls";
import HeaderNlogo from "../pages/headerNlogo";
import { registerUser } from "../../services/registration";

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
    opacity: ".5",
  },
}));

const initialValues = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function RegistrationForm(props) {
  const classes = useStyle();
  const { values, handleChange } = useForm(initialValues);

  useEffect(() => {
    // console.log("values", values)
    // console.log("values==", values.fullName);
    console.log("props->", props);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password !== values.confirmPassword) {
      window.alert("Password did not matched, try again! ");
    } else {
      console.log("hi", values);
      registerUser(values.fullName, values.email, values.password);
    }
  };
  return (
    <div className="App-headerforPages">
      <Card>
        <Grid container component="main" style={{ backgroundColor: "#020C53" }}>
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            className={classes.root}
          >
            <div className={classes.Paper}>
              <HeaderNlogo />
              <Controls.Form onSubmit={handleSubmit}>
                <Controls.Input
                  type="text"
                  label="Full Name"
                  value={values.fullName}
                  name="fullName"
                  onChange={handleChange}
                  id="fullName"
                  autoComplete="name"
                  autoFocus={true}
                />
                <Controls.Input
                  type="email"
                  value={values.email}
                  name="email"
                  margin="normal"
                  label="Email"
                  onChange={handleChange}
                  autoComplete="email"
                />
                <Controls.Input
                  type="password"
                  value={values.password}
                  name="password"
                  margin="normal"
                  label="Password"
                  onChange={handleChange}
                  autoComplete="password"
                />
                <Controls.Input
                  type="password"
                  value={values.confirmPassword}
                  name="confirmPassword"
                  margin="normal"
                  label="Confirm Password"
                  onChange={handleChange}
                />
                {/* <Controls.RadioGroup
                                    name='gender'
                                    value={values.gender}
                                    onChange={handleChange}
                                    items={genderItmes}
                                /> */}
                <Controls.Button label="SIGN UP" type="submit" fullWidth />
              </Controls.Form>
            </div>
            <div>
              <Typography variant="body2">
                <NavLink
                  to="/signin"
                  exact
                  style={{ textDecoration: "none" }}
                  activeClassName="activeSignUp"
                  activeStyle={{ color: "orange", textDecoration: "underline" }}
                >
                  Already have an account? Sign In
                </NavLink>
              </Typography>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
      </Card>
    </div>
  );
}
