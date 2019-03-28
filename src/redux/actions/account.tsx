import * as constants from '../constants';

export interface AccountSignIn {
  type: constants.ACCOUNT_SIGNIN;
  account: string
  password: string
}

export interface AccountSignOut {
  type: constants.ACCOUNT_SIGNOUT;
}

export type AccounAction = AccountSignOut | AccountSignIn;

export function signIn(account: string, password: string): AccountSignIn {
  return {
    type: constants.ACCOUNT_SIGNIN,
    account,
    password
  }
}

export function signOut(): AccountSignOut {
  return {
    type: constants.ACCOUNT_SIGNOUT
  }
}