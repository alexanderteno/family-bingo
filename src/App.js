import React from 'react';
import BingoCard from './Components/BingoCard';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h1 className="header">
        Teno/Perry Family Bingo
      </h1>
      <BingoCard />
    </div>
  );
}

export default App;
