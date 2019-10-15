import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },


    }),
);


interface Iprops {
    input:string
}

export  const Input: React.FC <Iprops> = ({input, ...props}) => {
    const classes = useStyles();

    return (


            <TextField
                id="outlined-email-input"
                label="Enter your login"
                className={classes.textField}
                type="login"
                name="login"
                autoComplete="login"
                margin="normal"
                variant="outlined"
                {...input} {...props}/>


    );
}

export default Input