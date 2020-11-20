import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailIcon from '@material-ui/icons/Mail';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import { IconButton } from '@material-ui/core';


// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {' © '}
            <Link color="inherit" href="#">
                maidIN
      </Link>{' '}
        v1.0 {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '80vh',
        width: '150vh'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?cook)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        // margin: theme.spacing(5, 2),
        margin: '46px 70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();

    const handleEmailError = () => {
        return false
    };

    const handleEmailErrorText = () => {
        return "email error text"
    };

    const handlePasswordErrorText = () => {
        return "password error text"
    }

    const handleFacebookLogin = () => {
        console.log('facebook clicked')
    }

    const handleGmailLogin = () => {
        console.log('facebook clicked')
    }

    const handleTwitterLogin = () => {
        console.log('facebook clicked')
    }

    const handleInstagramLogin = () => {
        console.log('facebook clicked')
    }

    const handleGithubLogin = () => {
        console.log('facebook clicked')
    }

    const handleLinkedInLogin = () => {
        console.log('facebook clicked')
    }



    return (
        <>
            <Card>
                <Grid container component="main">
                    <CssBaseline />
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.root}>
                        <div className={classes.paper}>
                            {/* <Avatar className={classes.avatar}>
                                {/* <LockOutlinedIcon /> */}
                            {/* </Avatar> */}
                            <Typography component="h1" variant="subtitle2">
                                WELCOME TO
                            </Typography>
                            <Typography component="h2" variant="h4" style={{ color: "tomato" }}>
                                maidIN
                            </Typography>
                            <Typography component="h3" variant="subtitle2">
                                login to get maid around your location
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    error={handleEmailError()}
                                    size="small"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    helperText={handleEmailErrorText()}
                                />
                                <TextField
                                    error={handleEmailError()}
                                    size="small"
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    helperText="Incorrect entry."
                                    helperText={handlePasswordErrorText()}
                                />
                                {/* <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                /> */}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Sign In
                                </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        {/* <p>Don't have account? */}
                                        <Link href="#" variant="body2">
                                            {" Don't have account? Sign Up"}
                                        </Link>
                                        {/* </p> */}
                                    </Grid>
                                </Grid>

                                <Grid container>
                                    <Grid item xs>
                                        <div>
                                            <Divider variant="middle" />
                                        </div>
                                        <Typography component="h1" variant="subtitle2" style={{ marginTop: '40px' }}>
                                            Continue with social media
                                        </Typography>
                                        <div >
                                            <IconButton aria-label="delete" onClick={() => handleFacebookLogin()}>
                                                <FacebookIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" onClick={() => handleTwitterLogin()}>
                                                <TwitterIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" onClick={() => handleGmailLogin()}>
                                                <MailIcon />
                                            </IconButton>

                                            <IconButton aria-label="delete" onClick={() => handleLinkedInLogin()}>
                                                <LinkedInIcon />
                                            </IconButton>

                                            <IconButton aria-label="delete" onClick={() => handleGithubLogin()}>
                                                <GitHubIcon />
                                            </IconButton>
                                            <IconButton aria-label="delete" onClick={() => handleInstagramLogin()}>
                                                <InstagramIcon />
                                            </IconButton>
                                        </div>
                                    </Grid>
                                </Grid>
                                <Box mt={5}>
                                    <Copyright />
                                </Box>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={false} sm={4} md={7} className={classes.image} />
                </Grid>
            </Card>
        </>
    );
}