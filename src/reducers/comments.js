import {SAVE_COMMENT} from '../../src/actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
};