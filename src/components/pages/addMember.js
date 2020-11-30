import React, { useEffect } from "react";
import { Card, Grid, makeStyles, Link, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { Controls } from "../../components/controls/controls";
import HeaderNlogo from "../pages/headerNlogo";

const useStyle = makeStyles((theme) => ({
  root: {
    height: "50vh",
    width: "150vh",
  },
  Paper: {
    margin: "20px 70px",
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
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  state: "",
  pincode: "",
  gender: "male",
  hiredate: new Date(),
  specialist: "",
  experience: "",
  age: "",
};

const genderItmes = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];

export default function AddMembers(props) {
  const classes = useStyle();
  const { values, handleChange } = useForm(initialValues);

  useEffect(() => {
    // console.log("values", values)
    // console.log("values==", values.fullName);
    console.log("props->", props);
  }, []);

  return (
    <>
      <Card style={{padding:'20px'}}>
        <HeaderNlogo />
        <Grid container component="main" className={classes.root}>
          <Grid item xs={6}>
            <div className={classes.Paper}>
              <Controls.Form>
                <Controls.Input
                  type="text"
                  label="Full Name"
                  value={values.fullName}
                  name="fullName"
                  onChange={handleChange}
                  id="fullName"
                  autoComplete="name"
                  // autoFocus={true}
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
                  type="phone"
                  value={values.mobile}
                  name="mobile"
                  margin="normal"
                  label="mobile"
                  onChange={handleChange}
                />

                <Controls.Input
                  type="number"
                  value={values.experience}
                  name="experience"
                  margin="normal"
                  label="experience"
                  onChange={handleChange}
                  autoComplete={true}
                />
                <Controls.Input
                  type="number"
                  value={values.age}
                  name="age"
                  margin="normal"
                  label="age"
                  onChange={handleChange}
                  autoComplete={true}
                />
              </Controls.Form>
            </div>
          </Grid>
          <Grid item xs={6}>
            <span className={classes.Paper}>
              <Controls.Input
                type="text"
                value={values.state}
                name="state"
                margin="normal"
                label="state"
                onChange={handleChange}
                autoComplete={true}
              />
              <Controls.Input
                type="text"
                value={values.city}
                name="city"
                margin="normal"
                label="city"
                onChange={handleChange}
                autoComplete={true}
              />
              <Controls.Input
                type="number"
                value={values.pincode}
                name="pincode"
                margin="normal"
                label="pincode"
                onChange={handleChange}
                autoComplete={true}
              />
              <Grid container>
                <Grid item style={{ marginTop: "5px" }}>
                  <Controls.RadioGroup
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    items={genderItmes}
                    label="Gender"
                  />
                </Grid>
                <Grid item></Grid>
                <Controls.GroupedSelect />
              </Grid>
            </span>
          </Grid>
        </Grid>
        <div>
          <Controls.Button label="SUBMIT DETAILS" type="submit" size='large' />
          {/* <Typography variant="body2">
            <NavLink
              to="/signin"
              exact
              style={{ textDecoration: "none" }}
              activeClassName="activeSignUp"
              activeStyle={{ color: "orange", textDecoration: "underline" }}
            >
              Already have an account? Sign In
            </NavLink>
          </Typography> */}
        </div>
      </Card>
    </>
  );
}
