import {IMapState} from "../types/mapStateTypes";
import {actionMap,SET_MAP_CORDS_SUCCESS} from "../types/map-actions";


const initialState: IMapState = {
   currentCoords: {
       lat:53.910500,
       lng: 27.549637,

   },

    zoom: 14,


};

const mapReducer = (state = initialState, action: actionMap) => {
    switch (action.type) {
        case SET_MAP_CORDS_SUCCESS:
            return {
                ...state, currentCoords:action.payload
            };

        default:
            return state;
    }
};


export const setCoordsSuccess = (coords:any) => ({
    type:SET_MAP_CORDS_SUCCESS, payload:coords
})

// export const setDragOffsetSuccess = (coords:any) => ({
//     type:SET_DRAG_OFFSET_SUCCESS, payload:coords
// })

export default mapReducer;