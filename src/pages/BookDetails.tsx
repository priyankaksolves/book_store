// src/pages/BookDetails.js
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  return (
    <div>
      <h2>Book Details for Book {id}</h2>
      <p>Details for Book {id} would be displayed here.</p>
    </div>
  );
}

export default BookDetails;
