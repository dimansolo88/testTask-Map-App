import {IAddLoginAction} from "../types/auth-actions";

export const required = (value:IAddLoginAction) => {
    if (value) return undefined;

    return "it is required field"
};