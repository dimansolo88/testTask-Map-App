import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, FormHelperText } from '@material-ui/core';



const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
        },


    }),
);


interface Iprops {
    input:string,
    meta:any,
}

export  const Input: React.FC <Iprops> = ({input, meta, ...props}) => {
    const classes = useStyles();

    return (

      <div>
          <FormControl>
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
              {meta.error && meta.touched && <FormHelperText style={{marginLeft: "50px"}} id="my-helper-text" error={true}
              > {meta.error} </FormHelperText>}
            </FormControl>


      </div>




    );
}

export default Input