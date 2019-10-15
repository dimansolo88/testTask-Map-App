import {SET_LOGIN_SUCCESS,IAddLoginAction} from "../types/auth-actions";
import {IAuthState} from "../types/authStateTypes";


const initialState: IAuthState = {

    initialeLogin: [
        {login: "test"},
        {login: "test2"},

    ],
    isAuth: false,


};

const authReducer = (state = initialState, action: IAddLoginAction) => {
    switch (action.type) {
        case SET_LOGIN_SUCCESS:

            return {
                ...state,isAuth:state.initialeLogin.some(l => l.login === action.login),
            };
        default:
            return state;
    }
};


export const setLoginSuccess = (login:IAddLoginAction) => ({
    type:SET_LOGIN_SUCCESS, login
});


export default authReducer;