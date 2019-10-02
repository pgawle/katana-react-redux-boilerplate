import { ADD_TASK } from './types';

const initial = {
  taskList: [
    { name: 'task 1' },
    { name: 'task 2' },
    { name: 'task 3' },
    { name: 'task 4' },
    { name: 't1' },
    { name: 'task 6' },
    { name: 'task 7' },
    { name: 'very long task to do' }
  ]
};

export default function taskList(state = initial.taskList, action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    default:
      return state;
  }
}
