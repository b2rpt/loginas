import React from 'react';
import {
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));    


export default function CustomizedInputs() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate>
            <TextField
                id="outlined-full-width"
                required id="standard-required"
                label="Name"
                style={{ margin: 8 }}
                placeholder="Enter your name"
                helperText="Required!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <TextField
                id="outlined-full-width"
                required id="standard-required"
                label="Location"
                style={{ margin: 8 }}
                placeholder="Enter your Locatin"
                helperText="Required!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <TextField
                id="outlined-full-width"
                required id="standard-required"
                label="Gender"
                style={{ margin: 8 }}
                placeholder="Select your Gender"
                helperText="Required!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />

            <TextField
                id="outlined-full-width"
                required id="standard-required"
                label="Contact Details"
                style={{ margin: 8 }}
                placeholder="Enter your Mobile No"
                helperText="Required!"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </form>
    );
}