import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Books from './pages/Books';
import AddBook from './pages/AddBook';

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>MiniLibrary</h1>
          <nav>
            <a href="/books">Books</a> | <a href="/add-book">Add Book</a>
          </nav>
        </header>

        <Routes>
          <Route path="/books" element={<Books />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

