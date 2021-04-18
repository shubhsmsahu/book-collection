import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BookCard = ({ image, title, author, published }) => {
  return (
    <div className="col mb-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h3 className="card-subtitle mb-2 text-muted">{author}</h3>
          <p className="card-text">
            Published Date:
            {published === "0000" ? "Not available" : published.substring(0, 4)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
