import React from "react";
import { useState } from "react";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { IconButton } from "@material-ui/core";
import { NavLink, Route, useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import homePage from "../../components/homepage/layout";
import "../../App.css";

import { validateLogin } from "../../services/login";

import useSocialLogin from "../../hooks/useSocialLogin";
import useForm from "../../hooks/useForm";
import { Controls } from "../../components/controls/controls";
import HeaderNlogo from "../pages/headerNlogo";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {" © "}
      {new Date().getFullYear()}{" "}
      <Link color="inherit" href="#">
        {"maidIN v1.0"}
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    Height: "80vh",
    width: "150vh",
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
  paper: {
    // margin: theme.spacing(5, 2),
    margin: "40px 70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
 
 
  // submit: {
  //   margin: theme.spacing(3, 0, 2),
  // },
}));

const initialValues = {
  email: "",
  password: "",
};

export default function LogInForm() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { values, handleChange } = useForm(initialValues);
  const { icon, handleLoginClick } = useSocialLogin("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    validateLogin(values.email, values.password).then((data) => {
      console.log("loginpage", data);
      if (data.status === 200) {
        // return <Route path="/home" exact component={homePage} />;
        history.push("/home");
      }
    });
    // window.alert('hi')
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
            <div className={classes.paper}>
              <HeaderNlogo />

              <Controls.Form onSubmit={handleSubmit}>
                <Controls.Input
                  type="email"
                  value={values.email}
                  name="email"
                  margin="normal"
                  label="Email"
                  onChange={handleChange}
                  autoComplete="email"
                  autoFocus={true}
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

                <Controls.Button label="SIGN IN" type="submit" fullWidth />

                <Grid container>
                  <Grid item xs={5}>
                    <Typography variant="body2">
                      <NavLink
                        to="/forgotpassword"
                        style={{ textDecoration: "none" }}
                      >
                        Forgot password?
                      </NavLink>
                    </Typography>
                  </Grid>
                  <Grid item xs={7}>
                    <Typography variant="body2">
                      <NavLink to="/signup" style={{ textDecoration: "none" }}>
                        Don't have account? SignUp
                      </NavLink>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container display={"flex"}>
                  <Grid item xs>
                    <Divider variant="middle" style={{ marginTop: "20px" }} />
                  </Grid>
                  <Typography style={{ marginTop: "3px" }}>Or</Typography>
                  <Grid item xs>
                    <Divider variant="middle" style={{ marginTop: "20px" }} />
                  </Grid>
                </Grid>

                <Grid container>
                  <Grid item xs>
                    <Typography
                      component="h1"
                      variant="subtitle2"
                      style={{ marginTop: "15px" }}
                    >
                      Continue with social media
                    </Typography>
                    <div>
                      {icon.map((m, index) => (
                        <IconButton
                          aria-label="icon"
                          key={m.id}
                          onClick={() => handleLoginClick(m.id)}
                        >
                          {m.icon}
                        </IconButton>
                      ))}
                    </div>
                  </Grid>
                </Grid>
                <Box mt={2}>
                  <Copyright />
                </Box>
              </Controls.Form>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} md={7} className={classes.image}>
            {/* <Typography
              variant="h5"
              align="center"
              wrap
              style={{ color: "#fff" }}
            >
              Now finding a cook to get your food on time is easy, just in
              cliks you can get maid around your location
            </Typography> */}
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}
