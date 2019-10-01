import { ADD_TASK } from './types';

const initial = {
  taskList: []
};

export default function taskList(state = initial.taskList, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}
