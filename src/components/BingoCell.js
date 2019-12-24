import React from 'react';
import { connect } from 'react-redux';
import './BingoCell.scss';

const BingoCell = ({ position: { x, y }, description, selected, setSelected }) => {
    return (
        <div
            className={`cell-${x}-${y} ${selected ? 'marked' : ''}`}
            onClick={() => setSelected(!selected)}
        >
            {description}
        </div>
    );
}

const mapStateToProps = ({ board }, { position: { x, y } }) => {
    const idx = (y * 5) + x;
    console.log(board[idx]);
    return {
        selected: !!board[idx].selected,
    };
}

const mapDispatchToProps = (dispatch, { position }) => ({
    setSelected: (selected) => { console.log(selected); dispatch({ type: 'SELECT_CELL', position, selected }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(BingoCell);