import {
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup as MuiRadioGroup,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {},
  radio: {
    "& .MuiFormLabel-root": {
      display: "flex",
    },
  },
}));

export default function RadioGroup(props) {
  const classes = useStyle();
  const { label, name, value, onChange, items, row } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup name={name} value={value} onChange={onChange} row>
        {items.map((m, index) => (
          <FormControlLabel value={m.id} control={<Radio />} label={m.title} />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
}
