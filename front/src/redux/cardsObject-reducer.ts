import {ICardsState} from "../types/objectCardsStateTypes";
import {
    objectCardsActionTypes, objectCardsTypes,
    SET_OBJECT_CARDS_SUCCESS,
    SHOW_LOADING
} from "../types/objectCards-actions";
import {cardsAPI} from "../components/api/api";


const initialState: ICardsState = {

    objectCards: [],
    isFetching:false,
};


const objectCardsReducer = (state = initialState, action: objectCardsActionTypes) => {
    switch (action.type) {
        case SET_OBJECT_CARDS_SUCCESS:
            return {
                ...state, objectCards: action.payload
            };

        case SHOW_LOADING:
            return {
                ...state,isFetching: action.isFetching
            };

        default:
            return state;
    }
};

export const setObjectCardsSuccess = (cards: objectCardsTypes) => ({
    type: SET_OBJECT_CARDS_SUCCESS, payload: cards
})

export const showLoading = (isFetching:boolean) => ({
    type:SHOW_LOADING, isFetching
})

export const getCardsObject = () => async (dispatch: Function) => {
    debugger
    dispatch(showLoading(true));
    debugger
    let res = await cardsAPI.getCards();
    debugger
    dispatch(showLoading(false));
    debugger
    dispatch(setObjectCardsSuccess(res))


};
export default objectCardsReducer;