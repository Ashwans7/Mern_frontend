// Card.jsx
import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        className="card-img"
        src="https://via.placeholder.com/300x180"
        alt="card"
      />

      <div className="card-body">
        <h2 className="card-title">{props.title}</h2>
        <p className="card-text">
          This is a clean and simple React card design using CSS.
        </p>

        <button className="card-btn">Read More</button>
      </div>
    </div>
  );
};

export default Card;