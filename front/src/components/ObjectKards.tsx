import React, {useEffect} from 'react';
import {connect} from "react-redux";
import SingleCard from './SingleCard';
import {AppState} from "../redux/store";
import {getCardsObject} from "../redux/cardsObject-reducer";
import CircularUnderLoad from "./commone/Loader";


const ObjectCards = ({cards, getCardsObject, isFetching}: any) => {



    useEffect(() => {
        // setInterval(() => {
            getCardsObject()
        // }, 3000)

    }, []);


    if (isFetching) {
        return <CircularUnderLoad/>
    }

    return (

        <div>
            {cards.map((c: { name: string, cords: number }) => <SingleCard key={c.name} cords={c.cords} name={c.name}/>)}
        </div>
    )
};


const mapStateToProps = (state: AppState) => ({
    cards: state.objectCards.objectCards,
    isFetching: state.objectCards.isFetching,
});


export default connect(mapStateToProps, {getCardsObject})(ObjectCards);