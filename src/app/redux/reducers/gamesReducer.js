import initialState from './initialState';
import { ADD_GAME } from '../actions/actionTypes';

export default function games(state = initialState.games, action) {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
}
