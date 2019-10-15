export const SET_MAP_CORDS_SUCCESS = "MAP/MAP-REDUCER/SET_MAP_CORDS_SUCCESS";
export const SET_DRAG_OFFSET_SUCCESS = "MAP/MAP-REDUCER/SET_DRAG_OFFSET_SUCCESS";

export interface cordsActionTypes {
    type: typeof SET_MAP_CORDS_SUCCESS;
    payload:
        { lat:number, lng:number}

}


export interface cordsDragOffsetActionTypes {
    type: typeof SET_DRAG_OFFSET_SUCCESS;
    payload:
        { lat:number, lng:number}

}

export type actionMap = cordsActionTypes | cordsDragOffsetActionTypes






