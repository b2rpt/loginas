import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles(theme => ({
    root: {
        "& .MuiFormControl-root":{
          width:'80%',
          margin:theme.spacing(1)
        },
        // height: "50vh",
        
      },
}));

export default function Form(props) {
    const { children , ...other} = props;
    const classes = useStyle()
    return (
        <form className={classes.root} {...other}>
            {props.children}
        </form>
    );
};