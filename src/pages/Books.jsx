import React, { useState, useEffect, useCallback } from 'react';
import BookCard from '../components/BookCard';

const STORAGE_KEY = 'miniLibraryBooks';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [genreFilter, setGenreFilter] = useState('all');

  useEffect(() => {
    const savedBooks = localStorage.getItem(STORAGE_KEY);
    if (savedBooks) {
      try {
        const parsedBooks = JSON.parse(savedBooks);
        setBooks(parsedBooks);
      } catch (error) {
        console.error('Error loading books from localStorage', error);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
  }, [books]);

  const handleDelete = useCallback(
    (id) => {
      const filteredBooks = books.filter((book) => book.id !== id);
      setBooks(filteredBooks);
    },
    [books]
  );

  const filteredBooks = books
    .filter((book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((book) => (genreFilter === 'all' ? true : book.genre === genreFilter));

  return (
    <div>
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <select
        value={genreFilter}
        onChange={(e) => setGenreFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="fiction">Fiction</option>
        <option value="nonfiction">Nonfiction</option>
        <option value="tech">Tech</option>
      </select>

      {filteredBooks.map((book) => (
        <BookCard key={book.id} book={book} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default Books;
