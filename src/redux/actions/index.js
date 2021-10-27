import {ADD_ITEM} from './types';

export const addNewItem = item => ({
    type: ADD_ITEM,
    payload: item
})