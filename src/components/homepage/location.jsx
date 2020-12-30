import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import { getLocation } from "../../services/getLocation";
import { FormControl, MenuItem, Select } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginTop: "15%",
  },
  table: {
    minWidth: "auto",
  },
  select: {
    borderRadius: "4px",
    // height: '30%',
    width: 190,
    backgroundColor: "white",
    // color: theme.palette.primaryText,
  },
});

let IndiaState = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export default function SimpleTable() {
  const [locationData, setLocationData] = useState();
  const [indianState, setIndianState] = useState();

  const handleIndianState = (e) => {
    console.log(e);
  };

  useEffect(() => {
    getLocation().then((location) => {
      setLocationData(location);
    });
  }, []);
  const classes = useStyles();

  return (
    <>
      <Paper>
        <TableContainer className={classes.root} component={Paper}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell>
                  <FormControl variant="outlined">
                    <Select
                      className={classes.select}
                      value={indianState}
                      defaultValue={"Bihar"}
                      onChange={(event) => handleIndianState(event)}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {IndiaState.map((m) => (
                        // console.log(m)
                        <MenuItem value={m}>{m}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableHead>
          </Table>
        </TableContainer>
      </Paper>

      <Paper>
        <TableContainer className={classes.root} component={Paper}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                {/* <TableCell>Available Cooks in Pune</TableCell> */}
                <TableCell>
                  <FormControl variant="outlined">
                    <Select
                      className={classes.select}
                      value={indianState}
                      defaultValue={"Bihar"}
                      onChange={(event) => handleIndianState(event)}
                      inputProps={{ "aria-label": "Without label" }}
                    >
                      {IndiaState.map((m) => (
                        // console.log(m)
                        <MenuItem value={m}>{m}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {locationData &&
                locationData.data.map((row) => (
                  <TableRow
                    key={row.locationName}
                    hover
                    role="checkbox"
                    tabIndex={-1}
                  >
                    <TableCell component="th" scope="row">
                      {row.locationName}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
