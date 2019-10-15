import React from "react";
import Map from "./Map";
import ObjectCards from "./ObjectKards";
import {connect} from "react-redux";
import {AppState} from "../redux/store";
import style from "./css/map.module.css";
import { Redirect } from "react-router-dom";
import {IMapState} from "../types/mapStateTypes";

interface IAuth {
    isAuth?:boolean
}

type Iprops  = IMapState & IAuth

const MapData: React.FC<Iprops> = ({currentCoords, zoom,isAuth}) => {
    if(!isAuth) {
        return <Redirect to='/login'/>
    }

    return (
        <div className={style.mapWrapper}>
            <Map currentCoords={currentCoords} zoom={zoom}/>
            <ObjectCards/>

        </div>
    )
}


const mapStateToProps = (state: AppState): IMapState & IAuth => {
    return ({
        currentCoords: state.map.currentCoords,
        zoom: state.map.zoom,
        isAuth:state.auth.isAuth,
    })
}

export default connect  (mapStateToProps, null)(MapData);