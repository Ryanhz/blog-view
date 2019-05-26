import * as Global from '../constants/global';
import { User, Social } from "@Types/index";

export interface GET_user_action {
  type: Global.GET_USER;
  id: number
}

export interface RESPONSE_user_Action {
  type: Global.RESPONSE_USER;
  data: User
}

export interface GET_mainInfo_action {
  type: Global.GET_MAININFO;
  id: number
}

export interface RESPONSE_MainInfo_action {
  type: Global.RESPONSE_MAININFO;
  user: User,
  postCount: number,
  categoryCount: number,
  tagCount: number
  socials?: Social[]
}

export interface POST_SignIn_Action {
  type: Global.SIGNIN;
  account: string
  password: string
}

export interface POST_SignOut_Action {
  type: Global.SIGNOUT;
}

export interface POST_Register_Action {
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


export interface FETCH_Action {
  type: Global.FETCH_START | Global.FETCH_END;
}

export type Global_Requset_Action = GET_user_action | POST_SignIn_Action | POST_Register_Action | POST_SignOut_Action | GET_mainInfo_action

export type Global_Response_Action = User_auth_Action | RESPONSE_user_Action | RESPONSE_MainInfo_action

export type Global_Notify_Action = FETCH_Action | SET_msg_Action

export type Global_Action = Global_Notify_Action | Global_Response_Action | Global_Requset_Action

export function signIn(account: string, password: string): POST_SignIn_Action {
  return {
    type: Global.SIGNIN,
    account,
    password
  }
}

export function signOut(): POST_SignOut_Action {
  return {
    type: Global.SIGNOUT
  }
}

export function register(data: any): POST_Register_Action {
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

export function get_user(id: number): GET_user_action {
  return {
    type: Global.GET_USER,
    id
  }
}

export function get_main_info(id: number): GET_mainInfo_action {
  return {
    type: Global.GET_MAININFO,
    id
  }
}