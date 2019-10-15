export interface ICardsState {

    objectCards: Array<objectBase>,
    isFetching:boolean
}

export interface objectBase {
    cords: Icoords
    name: string
}

export interface Icoords {
    lat: number,
    lng: number,
}


