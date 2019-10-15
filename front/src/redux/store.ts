import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import authReducer from "./auth-reducer";
import objectCardsReducer from "./cardsObject-reducer";
import mapReducer from "./map-reducer";
import { reducer as formReducer } from 'redux-form'



let reducers = combineReducers({

    auth:authReducer,
    objectCards:objectCardsReducer,
    map:mapReducer,
    form: formReducer,

});


export type AppState = ReturnType<typeof reducers>;

const store: any = createStore(reducers,applyMiddleware(thunkMiddleware) );

// @ts-ignore
window.store = store
export default store;