export interface Imaps {
    currentCoords?: {
        lat?: number,
        lng?: number,
    },
    zoom?: number,
    setCoordsSuccess: (coords: any) => void
}



export interface Text {
    lat?:number,
    lng?:number,
    text?:string,
}

export interface ISingleCard {
    cords:any,
    name:string
    setCoordsSuccess:Function
}