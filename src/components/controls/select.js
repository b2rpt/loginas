import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function GroupedSelect(props) {
  const classes = useStyles();
  const { name,label, value, onChange } = props;

  return (
    <div >
      <FormControl variant="outlined" >
        <InputLabel  >{label}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          name={name}
          value={value}
          onChange={onChange}
          label={label}
        >
          <MenuItem value="NorthIndian">NorthIndianFood</MenuItem>
          <MenuItem value="SouthIndian">SouthIndianFood</MenuItem>
          <MenuItem value="All">AllTypesOfFood</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
