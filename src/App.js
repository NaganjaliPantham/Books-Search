import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';

const baseurl = "https://www.googleapis.com/books/v1/volumes";
const apiKey = "AIzaSyC0hhXuStia5SvXYtN-m97TNTH0w9sAjns"; 

const App = () => {
  const [books, setBooks] = useState([]); 
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState("");
  const fetchBooks = async () => {
    const startIndex = page * 10; 
    const response = await fetch(`${baseurl}?q=${query}&key=${apiKey}&startIndex=${startIndex}&maxResults=10`);
    const data = await response.json();
    console.log(data.items); 
    if (data.items) {
      setBooks((previousBooks) => [...previousBooks, ...data.items]); 
    }
  };
  const loadMoreBooks = () => {
    setPage((previousPage) => previousPage + 1); 
  };
  useEffect(() => {
    fetchBooks();
  }, [page, query]);

  return (
    <>
      <div className='container'>
        <h1>Search Books</h1>
        <input
          type="text"
          placeholder="Search for books..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value); 
            setBooks([]); 
            setPage(0); 
          }}
        />
        <div className='row'>
          {books.map((book, index) => (
            <div className='col' key={index}>
              <div className='card'>
                <img
                  src={book.volumeInfo.imageLinks?.thumbnail || ""} 
                  alt={book.volumeInfo.title}
                />
                <div className='card-body'>
                <h1>Title:</h1> <h5>{book.volumeInfo.title}</h5>
                <h1>Authors:</h1> <h5>{book.volumeInfo.authors?.join(", ") || "Unknown"}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className='btn btn-primary' onClick={loadMoreBooks}>Load More</button>
      </div>
    </>
  );
};

export default App;