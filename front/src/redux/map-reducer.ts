import {IMapState} from "../types/mapStateTypes";
import {cordsActionTypes, SET_MAP_CORDS_SUCCESS} from "../types/map-actions";


const initialState: IMapState = {
   currentCoords: {
       lat:53.910500,
       lng: 27.549637,

   },

    zoom: 14,


};

const mapReducer = (state = initialState, action: cordsActionTypes) => {
    switch (action.type) {
        case SET_MAP_CORDS_SUCCESS:
            return {
                ...state, currentCoords:action.payload
            };

        default:
            return state;
    }
};


export const setCoordsSuccess = (coords:cordsActionTypes) => ({
    type:SET_MAP_CORDS_SUCCESS, payload:coords
})

export default mapReducer;