import * as _ from 'lodash';

const DEFAULT_STATE = {
    card: undefined,
}

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
        description: 'Grannie Screw Face'
    },
    {
        id: 16,
        description: 'General Motors'
    },
    {
        id: 17,
        description: 'Ready for the Baby?'
    },
    {
        id: 18,
        description: 'Cindy, How Are You Feeling?'
    },
    {
        id: 19,
        description: 'Harold, Seat Thief'
    },
    {
        id: 20,
        description: 'Jon\'s Marks'
    },
    {
        id: 21,
        description: 'Dinner Served Late'
    },
    {
        id: 22,
        description: 'Connor Whispers... What?'
    },
    {
        id: 23,
        description: 'KATH!'
    },
    {
        id: 24,
        description: '#GLUTEN-FREE'
    },
]

const getNewBoard = () => {
    const cloneOptions = OPTIONS.map((option) => option);
    const newDeck = [];
    while (cloneOptions.length > 0) {
        const idx = Math.floor(Math.random() * cloneOptions.length);
        newDeck.push(...cloneOptions.splice(idx, 1));
        if (newDeck.length === 12) {
            newDeck.push({ id: 'FREE', description: 'FREE', selected: true });
        }
    }
    return newDeck;
}


const rootReducer = (state = DEFAULT_STATE, action) => {
    const nextState = _.cloneDeep(state);
    switch (action.type) {
        case 'NEW_CARD':
            nextState.board = getNewBoard();
            break;
        case 'SELECT_CELL':
            const { position: { x, y }, selected } = action;
            const idx = (y * 5) + x;
            nextState.board[idx].selected = selected;
            break;
        default:
            return nextState;
    }
    return nextState;
}

export default rootReducer;