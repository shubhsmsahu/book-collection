import React from "react";
import BookCard from "./BookCard";
import "bootstrap/dist/css/bootstrap.css";

const BookList = ({ books }) => {
  return (
    <div className="card-deck justify-content-center ">
      {books.map((book, index) => {
        return (
          <BookCard
            key={index}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors[0]}
            published={book.volumeInfo.publishedDate}
            description={book.volumeInfo.description}
          />
        );
      })}
    </div>
  );
};

export default BookList;
