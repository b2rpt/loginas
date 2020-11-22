import React, { useEffect } from 'react';
import { Card, Grid, makeStyles, Link, Typography } from '@material-ui/core';

import useForm from '../../hooks/useForm';
import { Controls } from '../../components/controls/controls'

const useStyle = makeStyles(theme => ({
    root: {
        height: '80vh',
        width: '150vh'
    },
    Paper: {
        margin: '46px 70px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/1600x900/?cook)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },

}));

const initialValues = {
    id: 0,
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    city: '',
    gender: 'male',
    hiredate: new Date(),
    specialist: '',
    experience: '',
}

const genderItmes = [
    { id: "male", title: 'Male' },
    { id: "female", title: 'Female' },
    { id: "other", title: 'Other' }
]

export default function RegistrationForm() {
    const classes = useStyle();
    const { values, handleChange } = useForm(initialValues)

    useEffect(() => {
        console.log("values", values)
        console.log("values=", values.fullName)
    }, [values]);

    return (
        <>
            <Card>
                <Grid container component="main" >
                    <Grid item xs={false} sm={4} md={7} l={9} elevation={6} className={classes.image} blurRadius={1}>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} l={3} className={classes.root}>
                        <div className={classes.Paper}>
                            <Typography component="h1" variant="subtitle2">
                                WELCOME TO
                            </Typography>
                            <Typography component="h2" variant="h4" style={{ color: "tomato" }}>
                                maidIN
                            </Typography>
                            <Typography component="h3" variant="subtitle2">
                                register to get maid around your location
                            </Typography>
                            <Controls.Form >
                                <Controls.Input
                                    type='text'
                                    label="Full Name"
                                    value={values.fullName}
                                    name='fullName'
                                    onChange={handleChange}
                                    id='fullName'
                                    autoComplete="name"
                                />
                                <Controls.Input
                                    type='email'
                                    value={values.email}
                                    name='email'
                                    margin="normal"
                                    label="Email"
                                    onChange={handleChange}
                                    autoComplete="email"
                                />
                                <Controls.Input
                                    type='password'
                                    value={values.password}
                                    name='password'
                                    margin="normal"
                                    label="Password"
                                    onChange={handleChange}
                                    autoComplete="password"
                                />
                                <Controls.Input
                                    type='password'
                                    value={values.confirmPassword}
                                    name='confirmPassword'
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
                                <Controls.Button
                                    text="SIGN UP"
                                />
                            </Controls.Form>
                        </div>
                        <div>
                            <Link href="#" variant="body2">
                                Already have an account? Sign In
                            </Link>
                        </div>
                    </Grid>
                </Grid>
            </Card>

        </>
    )
}
