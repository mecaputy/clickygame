import React from "react";

import Col from "../Col";
import "./PictureCard.css";

const PictureCard = props => (
  <Col size="md-3" >
    <div className="card" value={props.id} onClick={() => props.handleClick(props.id)}>
    <div className="img-container">
      <img className="click-item" alt={props.name} src={props.image}/>
    </div>
    </div>
  </Col>
  
);


export default PictureCard;