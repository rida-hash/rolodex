import React from "react"
import ReactDOM from "react-dom"
import "./Card-list.styles.css";
import {Card} from "./Card"

function CardList(props){
    return(

        <div className="card-list">
        {
            props.monsters.map( monster =>
                <Card 
                key = {monster.id}
                monster={monster}
                /> )
        }
        </div>
    )
}

export default CardList;