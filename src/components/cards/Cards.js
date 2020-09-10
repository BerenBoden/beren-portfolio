import React from "react";
import "./Cards.scss";

const Cards = (props) => {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__containerTop">
          <img src={props.image} alt={props.alt} />
        </div>
        <div className="cards__containerBottom">
          <h1>{props.header}</h1>
          <p>{props.description}</p>
          <div className="cards__containerButton">
            <a target="_blank" rel="noopener noreferrer" href={props.liveLink}>
              <div className="button">View Live</div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={props.codeLink}>
              <div className="button">View Code</div>
            </a>
            <a target="_blank" rel="noopener noreferrer" href={props.caseLink}>
              <div className="button">View Case Study</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
