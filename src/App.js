import React from 'react';
import './App.css';

const BingoCard = () => {

  return [0, 1, 2, 3, 4].map((i) => {
    return [0, 1, 2, 3, 4].map((j) => (<div>({i}, {j})</div>));
  });

}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Teno Family Bingo
      </header>
      <BingoCard />
    </div>
  );
}

export default App;
