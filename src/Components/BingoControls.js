import React from 'react';
import { connect } from 'react-redux';

const BingoControls = ({newCard}) => {
    return (
        <div className="bingo-controls">
            <button 
                className="new"
                onClick={newCard}>
                New Card
            </button>
        </div>
    )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
    newCard: () => {
        dispatch({type: 'NEW_CARD'});
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BingoControls);