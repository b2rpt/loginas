import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import axios from 'axios';

const useStyles = makeStyles({
    root: {
        marginTop: '15%',
    },
    table: {
        minWidth: 'auto',
    },
});

function createData(name) {
    return { name };
}

const rows = [
    createData('Hinjewadi'),
    createData('Pimpari'),
    createData('VimanNagar'),
    createData('Pashan'),
    createData('Aundh'),

];



export default function SimpleTable() {

    const [locationData, setLocationData] = useState()

    useEffect(() => {
        axios.get('https://maidin-33922.firebaseio.com/x', {
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
               // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            }
        })
            .then((responce) => responce.json())
            .then((responceData) => {
                console.log('Responce', responceData)
                setLocationData(responceData)
            })
            .catch((error) => {
                console.log('Error', error)
            })
    })
    const classes = useStyles();

    return (
        <Paper>
            <TableContainer className={classes.root} component={Paper}>
                <Table className={classes.table} stickyHeader aria-label="sticky table" >
                    <TableHead>
                        <TableRow>
                            <TableCell>All Available Cooks</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.name} hover role="checkbox" tabIndex={-1} >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}