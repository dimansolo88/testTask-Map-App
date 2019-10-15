import React from 'react';
import './App.css';
// import Map from "./components/Map";
import Login from "./components/Login";
import {Switch, Route} from 'react-router-dom';
import MapData from "./components/MapData";
import Header from "./components/Header";

const App: React.FC  = () => {


    return (
        <div className="appWrapper" >
            <Header/>
            <Switch>
                <Route path='/' exact render={() => <MapData/> }/>
                <Route path='/login' exact render={() => <Login/>}/>
            </Switch>


        </div>
    );
}

export default App;
