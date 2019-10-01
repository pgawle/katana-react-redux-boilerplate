import { sleep } from '../utils';

export const fetchLogin = async (email, password) => {
  await sleep(1000);

  if (email !== 'user@user.com' || password !== 'pass') {
    throw Error('Wrong email or password');
  }

  return true;
};
