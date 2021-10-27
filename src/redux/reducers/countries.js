import {ADD_ITEM} from '../actions/types';

const countriesReducer = (state=[], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [...state, action.payload];
        default:
            return  state;
    }
}

export default countriesReducer;