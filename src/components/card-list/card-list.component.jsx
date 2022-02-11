import React from "react";
import { Card } from "../card/card.coomponent";
import "./card-list-style.css";

export const CardList =(props)=>(
    <div className="card-list">
  {  props.monsters.map(monster=>(
        <Card key={monster.id} monster={monster}></Card>
      ))}
    </div>
);