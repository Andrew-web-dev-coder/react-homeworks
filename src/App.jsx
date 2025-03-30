import { useState } from 'react';
import BookList from './components/BookList';
import './App.css';

function App() {
  return (
    <div>
      <h1>Items list:</h1>
      <BookList /> 
    </div>
  );
}

export default App;
