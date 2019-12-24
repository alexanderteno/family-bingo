import React from 'react';
import BingoCell from './BingoCell';
import './BingoCard.scss';
import { connect } from 'react-redux';

const BoardItems = ({ board }) => {
  const gridItems = [0, 1, 2, 3, 4].map((i) => {
    return [0, 1, 2, 3, 4].map((j) => {
      const idx = (j * 5) + i;
      const { description, id } = board[idx];
      return (
        <BingoCell key={id} description={description} position={{ x: i, y: j }} />
      )
    });
  });
  return gridItems;
}


const BingoCard = ({ board }) => {

  return (
    <div className="bingo-card">
      {board ? (
        <BoardItems board={board} />
      ) : (
          <div className="new-game">Hit the 'New Card' Button</div>
        )}
    </div>
  )

}

const mapStateToProps = (state /*, ownProps */) => {
  return {
    board: state.board,
  };
}

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BingoCard);