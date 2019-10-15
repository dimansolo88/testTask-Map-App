import React from "react";
import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';



const Buttons: React.FC  = () => {
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            button: {
                margin: theme.spacing(7),
            },
            input: {
                display: 'none',
            },
        }),
    );

    const classes = useStyles();

    return <div>
        <Button variant="contained" color="default"  type="submit" className={classes.button}
                style={{marginTop: 10, marginLeft:70}}>
            Log in
        </Button>
    </div>

}


export default Buttons