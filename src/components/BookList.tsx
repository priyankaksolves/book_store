// src/components/BookList.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import BookItem from './BookItem';
import { Book } from '../types'; // Import the Book type

const books: Book[] = [
  { id: 1, title: 'Book 1', author: 'Author 1' },
  { id: 2, title: 'Book 2', author: 'Author 2' },
  { id: 3, title: 'Book 3', author: 'Author 3' },
];

const BookList: React.FC = () => {
  return (
    <div>
      {books.map((book) => (
        <Link key={book.id} to={`/book/${book.id}`}>
          <BookItem book={book} />
        </Link>
      ))}
    </div>
  );
};

export default BookList;
