import React from "react";
import GoogleMapReact from 'google-map-react';
import {Imaps, Text} from "../types/types";
import {connect} from "react-redux";
import {setCoordsSuccess} from "../redux/map-reducer";
const AnyReactComponent: React.FC <Text> = ({ text }) => <div>{text}</div>;



const Map: React.FC <Imaps> = ({currentCoords, zoom, setCoordsSuccess }) => {

        return (

            <div style={{ height: '100vh', width: '68%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: `AIzaSyCmyOvqKrZTBaTeKj3O4NO3mXSRxBRH1qg` }}
                    //defaultCenter={ { lat:53.910501,lng: 27.549638,}}
                    center={currentCoords}
                    defaultZoom={zoom}
                    onDragEnd={(x: any) => {setCoordsSuccess({lat:x.center.lat(),lng:x.center.lng()})}}
                >
                    <AnyReactComponent/>


                </GoogleMapReact>

            </div>
        );

};


export default connect (null, {setCoordsSuccess}) (Map);