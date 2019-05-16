import * as Global from '../constants/global';

export interface SignIn_Action {
  type: Global.SIGNIN;
  account: string
  password: string
}

export interface SignOut_Action {
  type: Global.SIGNOUT;
}

export interface Register_Action {
  type: Global.USER_REGISTER;
  data: any
}

export interface SET_msg_Action {
  type: Global.SET_MESSAGE;
  msgType: number,
  msgContent: string
}

export interface User_auth_Action {
  type: Global.USER_AUTH;
}

//

export interface RESPONSE_user_Action {
  type: Global.RESPONSE_USER_INFO;
  data: any
}

export interface FETCH_Action {
  type: Global.FETCH_START | Global.FETCH_END;
}

// export enum GlobalAction {
//   SignOut_Action,
//   SignIn_Action,
//   Register_Action,
//   SET_msg_Action,
//   User_auth_Action,
//   FETCH_Action,
//   RESPONSE_user_Action
// }

export type GlobalAction = SignOut_Action | SignIn_Action | Register_Action | SET_msg_Action | User_auth_Action | FETCH_Action | RESPONSE_user_Action;

export function signIn(account: string, password: string): SignIn_Action {
  return {
    type: Global.SIGNIN,
    account,
    password
  }
}

export function signOut(): SignOut_Action {
  return {
    type: Global.SIGNOUT
  }
}

export function register(data: any): Register_Action {
  return {
    type: Global.USER_REGISTER,
    data
  }
}

export function clear_msg(): SET_msg_Action {
  return {
    type: Global.SET_MESSAGE,
    msgType: 1,
    msgContent: ''
  }
}

export function user_auth(): User_auth_Action {
  return {
    type: Global.USER_AUTH
  }
}