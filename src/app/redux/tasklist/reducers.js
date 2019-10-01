import { ADD_GAME } from './types';

const initial = {
  todo: []
};

export default function games(state = initial.todo, action) {
  switch (action.type) {
    case ADD_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
}
