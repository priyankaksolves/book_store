// src/components/BookItem.tsx
import React from 'react';
import { Book } from '../types'; // Import the Book type

interface BookItemProps {
  book: Book; // Define the type of the 'book' prop using the Book interface
}

const BookItem: React.FC<BookItemProps> = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default BookItem;
