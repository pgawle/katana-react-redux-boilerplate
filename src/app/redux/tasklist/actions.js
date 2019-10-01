import * as types from './types';

export function addGame(payload) {
  return { type: types.ADD_GAME, payload };
}
