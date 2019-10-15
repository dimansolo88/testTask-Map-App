export const SET_LOGIN_SUCCESS = "MAP/AUTH_REDUCER/ADD_LOGIN_SUCCESS";
export const ADD_PASSWORD_SUCCESS = "MAP/AUTH_REDUCER/ADD_PASSWORD_SUCCESS";

export interface IAddLoginAction {
    type: typeof SET_LOGIN_SUCCESS;
    login: string;
}
export interface IAddPasswordAction {
    type: typeof ADD_PASSWORD_SUCCESS;
    password: string;
}



export type authActionTypes =
    | IAddLoginAction
    | IAddPasswordAction;