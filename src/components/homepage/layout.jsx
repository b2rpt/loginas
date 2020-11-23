import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

import CookList from './cookList';
import Location from './location';
import UserForm from './userForm';
import AppBar from './aapBar';
import { Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginLeft: '3%'
    },
    divider: {
        marginLeft: '10px',
        marginRight: '10px'
    }
}));

const handleAddCook = () => {
    return (<UserForm />)
}

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar />
            <divider/>
            <div className={classes.root}>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                        <Location />
                    </Grid>
                    <Divider orientation="vertical" className={classes.divider} />
                    <Grid item xs={9}>
                        <CookList />
                        <Button onClick={handleAddCook}> add cook</Button>
                        <UserForm />
                    </Grid>
                </Grid>

            </div>
        </React.Fragment>

    );
}