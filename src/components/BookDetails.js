import React from "react";
import Model from "react-modal";
import "bootstrap/dist/css/bootstrap.css";

const BookDetails = ({
  toggle,
  setToggle,
  image,
  title,
  author,
  description,
}) => {
  return (
    <div>
      <Model
        id="model"
        isOpen={toggle}
        onRequestClose={() => setToggle(false)}
        style={{
          overlay: {
            backgroundColor: "gray",
          },
        }}
      >
        <img src={image} />
        <h5>{title}</h5>
        <h3>{author}</h3>
        <p>{description}</p>
        <div>
          <button onClick={() => setToggle(false)} className="btn btn-primary">
            Close
          </button>
        </div>
      </Model>
    </div>
  );
};

export default BookDetails;
