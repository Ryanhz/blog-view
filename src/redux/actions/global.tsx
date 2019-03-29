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

export interface Clear_msg_Action {
  type: Global.SET_MESSAGE;
}


export interface User_auth_Action {
  type: Global.USER_AUTH;

}

export type GlobalAction = SignOut_Action | SignIn_Action | Register_Action | Clear_msg_Action | User_auth_Action;

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

export function register(data: any) {
  return {
    type: Global.USER_REGISTER,
    data
  }
}

export function clear_msg() {
  return {
    type: Global.SET_MESSAGE,
    msgType: 1,
    msgContent: ''
  }
}

export function user_auth() {
  return {
    type: Global.USER_AUTH
  }
}