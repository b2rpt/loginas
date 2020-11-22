import { FormControl, FormControlLabel, FormLabel, makeStyles, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {

    },
    radio: {
        '& .MuiFormLabel-root': {
            display: 'flex'
        }
    }
}));

export default function RadioGroup(props) {
    const classes = useStyle();
    const { label, name, value, onChange, items } = props;

    return (
        <FormControl className={classes.radio}>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup
                row
                name={name}
                value={value}
                onChange={onChange}>
                {items.map((m, index) => (
                    <FormControlLabel value={m.id} control={<Radio />} label={m.title} />

                ))}
            </MuiRadioGroup>
        </FormControl>
    )
}
