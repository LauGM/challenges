import { createContext, useEffect, useState } from 'react';
import { getBooks } from '../asyncMock';

export const BooksContext = createContext(false);

// eslint-disable-next-line react/prop-types
export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);

  useEffect(()=>{
    getBooks().then((data)=> setBooks(data.response));
  },[])

  const findById=(id)=>{
    return books.find(book => book.id === id)
  }

  return (
    <BooksContext.Provider value={[books, setBooks, findById]}>
      {children}
    </BooksContext.Provider>
  );
}