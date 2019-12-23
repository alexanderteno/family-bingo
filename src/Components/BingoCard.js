import React from 'react';
import './BingoCard.scss';

const OPTIONS = [
    {
      id: 1,
      description: 'Harold Drops Food',
    },
    {
      id: 2,
      description: 'Shawn Invokes Trump',
    },
    {
      id: 3,
      description: 'The Change Table',
    },
    {
      id: 4,
      description: 'Racism',
    },
    {
      id: 5,
      description: 'Chris\' Law School'
    },
    {
      id: 6,
      description: 'Chris\' House',
    },
    {
      id: 7,
      description: 'Church Gossip',
    },
    {
      id: 8,
      description: 'Deborah\'s Betrayal',
    },
    {
      id: 9,
      description: 'Joyceln on Baby Names'
    },
    {
      id: 10,
      description: 'Trudeau'
    },
    {
      id: 11,
      description: 'Politics'
    },
    {
      id: 12,
      description: 'Climate Change'
    },
    {
      id: 13,
      description: 'Shawn\'s Friend...'
    },
    {
      id: 14,
      description: 'Louder For Grannie'
    },
    {
      id: 15,
      description: 'HALP'
    },
    {
      id: 16,
      description: 'HALP'
    },
    {
      id: 17,
      description: 'HALP'
    },
    {
      id: 18,
      description: 'HALP'
    },
    {
      id: 19,
      description: 'HALP'
    },
    {
      id: 20,
      description: 'HALP'
    },
    {
      id: 21,
      description: 'HALP'
    },
    {
      id: 22,
      description: 'HALP'
    },
    {
      id: 23,
      description: 'HALP'
    },
    {
      id: 24,
      description: 'HALP'
    },
  ]
  
  const BingoCard = () => {
  
    const cloneOptions = OPTIONS.map((option) => option);
    const newDeck = [];
    while (cloneOptions.length > 0) {
      const idx = Math.floor(Math.random() * cloneOptions.length);
      newDeck.push(...cloneOptions.splice(idx, 1));
      if (newDeck.length === 12) {
        newDeck.push({ id: 'FREE', description: 'FREE' });
      }
    }
  
    const gridItems = [0, 1, 2, 3, 4].map((i) => {
      return [0, 1, 2, 3, 4].map((j) => {
        const idx = (j * 5) + i;
        const { description, id } = newDeck[idx];
        return (
          <div key={id} className={`cell-${i}-${j}`}>{description}</div>
        )
      });
    });
  
    return (
      <div className="bingo-card">
        {gridItems}
      </div>
    );
  
  }

  export default BingoCard;