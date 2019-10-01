import { AUTHENTICATE, DEAUTHENTICATE } from './types';

export const authenticate = user => ({ type: AUTHENTICATE, user });

export const deauthenticate = () => ({ type: DEAUTHENTICATE });
