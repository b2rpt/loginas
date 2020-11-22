import { makeStyles, Button } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiButton-root': {
            marginTop: theme.spacing(8),
        }
    },

}));

export default function Input(props) {
    const classes = useStyle();
    const { text, size, color, variant, onClick } = props
    return (
        <Button className={classes.root}
            color={color || 'primary'}
            fullWidth
            size={size || "large"}
            variant={variant || 'contained'}
            onClick={onclick}
        >
            {text}
        </Button>

    )
}
