import * as types from './types';

export function addTask(payload) {
  return { type: types.ADD_TASK, payload };
}
