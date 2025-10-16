import React, { memo } from 'react';

const BookCard = memo(({ book, onDelete }) => {
  const { title, author, genre, rating } = book;

  return (
    <div>
      <h3>{title}</h3>
      <p>Author: {author}</p>
      <p>Genre: {genre}</p>
      <p>Rating: {rating}</p>
      <button onClick={() => onDelete(book.id)}>Delete</button>
    </div>
  );
});

export default BookCard;
