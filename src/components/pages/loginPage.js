import React from "react";
import { useState } from "react";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { IconButton } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { validateLogin } from "../../services/login";

// import RegistrationPage from "./registration";
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
    height: "80vh",
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
  },
  paper: {
    // margin: theme.spacing(5, 2),
    margin: "40px 70px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    // marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
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

  const handleEmailError = () => {
    return false;
  };

  const handleEmailErrorText = () => {
    return "email error text";
  };

  const handlePasswordErrorText = () => {
    return "password error text";
  };

  const handleEmailInput = (e) => {
    console.log(e.target);
    setEmail(e.target.value);
  };

  const handlePasswordInput = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('-------------submitted')
    // validateLogin(email, password).then((data) => console.log(data));
    window.alert('hi')
  };

  return (
    <>
      <Card>
        <Grid container component="main">
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

              <Controls.Form onSubmit={(e)=>handleSubmit(e)} >
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
                    <Divider variant="middle" style={{ marginTop: "60px" }} />
                  </Grid>
                  <Typography style={{ marginTop: "50px" }}>Or</Typography>
                  <Grid item xs>
                    <Divider variant="middle" style={{ marginTop: "60px" }} />
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
                <Box mt={5}>
                  <Copyright />
                </Box>
                {/* </form> */}
              </Controls.Form>
            </div>
          </Grid>
          <Grid item xs={false} sm={4} md={7} className={classes.image} />
        </Grid>
      </Card>
    </>
  );
}
