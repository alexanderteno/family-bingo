import React from 'react';
import BingoCard from './components/BingoCard';
import BingoControls from './components/BingoControls';
import './App.scss';

function App() {
  return (
    <div className="app">
      <h2 className="header">
        TENO/PERRY FAMILY BINGO
      </h2>
      <BingoCard />
      <BingoControls />
    </div>
  );
}

export default App;
