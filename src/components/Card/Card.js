import React from "react";
import "./Card.css";

const Cards = (props) => (
  <div className="Card">
    <button type="button">delete</button>
    <h3 className="card-title">{props.title}</h3>
    <p className="content">{props.content}</p>
  </div>
);

export default Cards;
