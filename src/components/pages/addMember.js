import React, { useEffect } from "react";
import { Card, Grid, makeStyles, Link, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import useForm from "../../hooks/useForm";
import { Controls } from "../../components/controls/controls";
import HeaderNlogo from "../pages/headerNlogo";
import { addCookDetails } from "../../services/addCookDetails";

const useStyle = makeStyles((theme) => ({
  Paper: {
    // margin: "20px 70px",
    // flexDirection: "column",
    // alignItems: "center",
  },
}));

const initialValues = {
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  state: "",
  pincode: "",
  gender: "male",
  hiredate: new Date(),
  specialist: "NorthIndian",
  experience: "",
  address: "",
  location: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hi", values);
    addCookDetails(values);
  };

  return (
    <>
      <div className="App-headerforPages" style={{ padding: "60px" }}>
        <Card style={{ padding: "20px" }}>
          <HeaderNlogo />
          <Controls.Form onSubmit={handleSubmit}>
            <Grid container component="main">
              <Grid item xs={6} style={{ width: "100vh" }}>
                <div className={classes.Paper}>
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
                  <Controls.GroupedSelect
                    label="specialistIN"
                    value={values.specialist}
                    name="specialist"
                    onChange={handleChange}
                  ></Controls.GroupedSelect>
                </div>
              </Grid>
              <Grid item xs={6}>
                <span className={classes.Paper}>
                  <Controls.Input
                    type="address"
                    value={values.address}
                    name="address"
                    margin="normal"
                    label="address"
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
                    type="text"
                    value={values.state}
                    name="state"
                    margin="normal"
                    label="state"
                    onChange={handleChange}
                    autoComplete={true}
                  />

                  <Controls.Input
                    type="address"
                    value={values.location}
                    name="location"
                    margin="normal"
                    label="location"
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

                  <Controls.RadioGroup
                    row="row"
                    name="gender"
                    value={values.gender}
                    onChange={handleChange}
                    items={genderItmes}
                    // label="Gender"
                  />
                </span>
              </Grid>
            </Grid>
            <div>
              <Controls.Button
                label="SUBMIT DETAILS"
                type="submit"
                size="large"
              />
            </div>
          </Controls.Form>
        </Card>
      </div>
    </>
  );
}
