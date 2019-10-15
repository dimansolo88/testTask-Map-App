import React from "react";
import {connect} from "react-redux";
import {setLoginSuccess} from "../redux/auth-reducer";
import {LoginReduxForm} from "./LoginForm";
import { AppState } from "../redux/store";
import { Redirect } from "react-router-dom";
import style from "./css/login.module.css"

interface Iprops {
    setLoginSuccess:Function,
    isAuth:boolean

}

const Login: React.FC<Iprops> = ({setLoginSuccess, isAuth}) => {
    const onsubmit = (login:any) => {
        setLoginSuccess(login.login)
    }

    if(isAuth){
        return <Redirect to='/'/>
    }

    return (
        <div className={style.login}>
           <LoginReduxForm onSubmit={onsubmit}/>
        </div>
    )
};

const mapStateToProps = (state:AppState) => ({
    isAuth:state.auth.isAuth,
})

export default connect(mapStateToProps, {setLoginSuccess})(Login);