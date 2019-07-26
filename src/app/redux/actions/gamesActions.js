import * as types from './actionTypes';

export function addGame(payload) {
  return { type: types.ADD_GAME, payload };
}
