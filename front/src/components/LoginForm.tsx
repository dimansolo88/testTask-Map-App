import React from "react";
import {Field, reduxForm} from "redux-form";
import Buttons from "./commone/Button";
import Input from "./commone/Input";
import {createStyles, makeStyles, Theme} from "@material-ui/core";


const LoginForm: React.FC<any> = ({handleSubmit}) => {

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            container: {
                display: 'flex',
                flexWrap: 'wrap',
            },

        }),
    );

    const classes = useStyles();

    return (
        <div>
            <form onSubmit={handleSubmit}  className={classes.container} noValidate autoComplete="off"
            style={{display: "flex" , flexDirection: "column", marginTop: "200px"}}>
                <div>
                    <Field component={Input} name={"login"}
                            type="text" placeholder={"enter yor login"}/>
                </div>

                <div>
                    <Buttons/>
                </div>

            </form>

        </div>


    )
}


export const LoginReduxForm = reduxForm({
    form: "login"
})(LoginForm)

