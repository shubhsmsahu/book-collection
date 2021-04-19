import React, { useState, useEffect } from "react";
import SearchArea from "./SearchArea";
import BookList from "./BookList";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    const defaultCollection = () => {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=programinglanguage`)
        .then((data) => {
          return data.json();
        })
        .then((actualData) => {
          // console.log(actualData.items);
          const data = cleanData(actualData);
          // console.log(data);
          setBooks(data);
        });
    };
    defaultCollection();
  }, []);

  const handleBook = (event) => {
    event.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchField}`)
      .then((data) => {
        return data.json();
      })
      .then((actualData) => {
        // console.log(actualData.items);
        const data = cleanData(actualData);
        // console.log(data);
        setBooks(data);
      });
    // console.log(books);
  };

  const handleSearch = (e) => {
    // console.log(e.target.value);
    setSearchField(e.target.value);
  };

  const handleSort = (event) => {
    // console.log(event.target.value);
    setSort(event.target.value);
  };

  const cleanData = (data) => {
    const cleanedData = data.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "0000";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = { thumbnail: "No image" };
      }

      return book;
    });

    return cleanedData;
  };

  const sortBooks = books.sort((a, b) => {
    if (sort === "Newest") {
      return (
        parseInt(b.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(a.volumeInfo.publishedDate.substring(0, 4))
      );
    } else if (sort === "Oldest") {
      return (
        parseInt(a.volumeInfo.publishedDate.substring(0, 4)) -
        parseInt(b.volumeInfo.publishedDate.substring(0, 4))
      );
    }
  });

  return (
    <div>
      <SearchArea
        handleBook={handleBook}
        handleSearch={handleSearch}
        handleSort={handleSort}
      />
      <BookList books={sortBooks} />
    </div>
  );
};

export default Books;
