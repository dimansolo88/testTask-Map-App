export const SET_OBJECT_CARDS_SUCCESS = "MAP/OBJECT_CARDS_REDUCER/SET_CARDS_SUCCESS";
export const SHOW_LOADING = "MAP/OBJECT_CARDS_REDUCER/IF_FETCHING_SUCCESS";

export interface objectCardsTypes {
    type: typeof SET_OBJECT_CARDS_SUCCESS;
    payload:[]
}

export interface IShowLoading {
    type: typeof SHOW_LOADING;
    isFetching:boolean
}

export type  objectCardsActionTypes = objectCardsTypes | IShowLoading




