import React, { useState } from "react";
import BookDetails from "./BookDetails";
import "bootstrap/dist/css/bootstrap.css";

const BookCard = ({ image, title, author, published, description }) => {
  const [toggle, setToggle] = useState(false);

  const handleViewMore = () => {
    setToggle(true);
  };

  return (
    <>
      <div className="col mb-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src={image} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h3 className="card-subtitle mb-2 text-muted">{author}</h3>
            <p className="card-text">
              Published Date:
              {published === "0000"
                ? "Not available"
                : published.substring(0, 4)}
            </p>
            <button
              type="button"
              onClick={handleViewMore}
              className="btn btn-primary"
            >
              Viwe More
            </button>
          </div>
        </div>
      </div>
      <BookDetails
        toggle={toggle}
        setToggle={setToggle}
        image={image}
        title={title}
        author={author}
        description={description}
      />
    </>
  );
};

export default BookCard;
