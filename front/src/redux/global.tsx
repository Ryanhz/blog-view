import { User, Social } from "@Types/index";
import { Global } from './storeMix'

export enum GlobalReduxType {
  SIGNIN = 'G-SIGNIN', SIGNOUT = 'G-SIGNOUT',
  USER_REGISTER = 'G-USER_REGISTER',
  FETCH_START = 'G-FETCH_START', FETCH_END = 'G-FETCH_END', SET_MESSAGE = 'G-SET_MESSAGE',
  USER_AUTH = 'G-USER_AUTH',
  GET_USER = 'G-GET_USER', RESPONSE_USER = 'G-RESPONSE_USER',
  GET_Posts_Count = 'G-GET_Posts_Count', RESPONSE_Posts_Count = 'RESPONSE_Posts_Count',
  GET_categories_count = 'G-GET_categories_count', RESPONSE_categories_count = 'G-RESPONSE_categories_count',
  GET_tags_count = 'G-GET_tags_count', RESPONSE_tags_count = 'G-RESPONSE_tags_count',
  GET_Socials = 'G-GET_Socials', RESPONSE_Socials = 'G-RESPONSE_Socials',
  GET_PROFILE = 'G-GET_PROFILE', RESPONSE_PROFILE = 'G-RESPONSE_PROFILE'
}

export namespace GlobalActions {
  //------------------------user
  export interface GET_user {
    type: GlobalReduxType.GET_USER;
    id?: number
    query?: any
  }

  export interface RESPONSE_user {
    type: GlobalReduxType.RESPONSE_USER;
    data: User
  }

  //------------------------Posts_Count
  export interface GET_Posts_Count {
    type: GlobalReduxType.GET_Posts_Count;
    uid?: number
  }

  export interface RESPONSE_Posts_Count {
    type: GlobalReduxType.RESPONSE_Posts_Count;
    data: User
  }

  //-----------------------categories_count
  export interface GET_categories_count {
    type: GlobalReduxType.GET_categories_count;
    uid?: number
  }

  export interface RESPONSE_categories_count {
    type: GlobalReduxType.RESPONSE_categories_count;
    data: number
  }

  //-----------------------tags_count
  export interface GET_tags_count {
    type: GlobalReduxType.GET_tags_count;
    uid?: number
  }

  export interface RESPONSE_tags_count {
    type: GlobalReduxType.RESPONSE_tags_count;
    data: number
  }
  //-----------------------Social
  export interface GET_Socials {
    type: GlobalReduxType.GET_Socials;
    uid?: number
    query?: any
  }


  export interface RESPONSE_Socials {
    type: GlobalReduxType.RESPONSE_Socials;
    data: Social[]
  }

  //-------------------------
  export interface GET_Profile {
    type: GlobalReduxType.GET_PROFILE;
    id: number
  }
  export interface RESPONSE_Profile {
    type: GlobalReduxType.RESPONSE_PROFILE;
    user: User,
    postCount: number,
    categoryCount: number,
    tagCount: number
    socials?: Social[]
  }

  export interface POST_SignIn {
    type: GlobalReduxType.SIGNIN;
    account: string
    password: string
  }

  export interface POST_SignOut {
    type: GlobalReduxType.SIGNOUT;
  }

  export interface POST_Register {
    type: GlobalReduxType.USER_REGISTER;
    data: any
  }

  export interface SET_msg {
    type: GlobalReduxType.SET_MESSAGE;
    msgType: number,
    msgContent: string
  }

  export interface User_auth {
    type: GlobalReduxType.USER_AUTH;
  }

  //
  export interface FETCH {
    type: GlobalReduxType.FETCH_START | GlobalReduxType.FETCH_END;
  }
}

export type Global_Requset_Action = GlobalActions.GET_user | GlobalActions.POST_SignIn |
  GlobalActions.POST_Register | GlobalActions.POST_SignOut | GlobalActions.GET_Profile

export type Global_Response_Action = GlobalActions.User_auth | GlobalActions.RESPONSE_user |
  GlobalActions.RESPONSE_Profile | GlobalActions.RESPONSE_Posts_Count |
  GlobalActions.RESPONSE_Socials | GlobalActions.RESPONSE_categories_count |
  GlobalActions.RESPONSE_tags_count

export type Global_Notify_Action = GlobalActions.FETCH | GlobalActions.SET_msg

// export type Global_Action = Global_Notify_Action | Global_Response_Action | Global_Requset_Action

export namespace GlobalActionCreator {

  export function getUser(id?: number, query?: any): GlobalActions.GET_user {
    return {
      type: GlobalReduxType.GET_USER,
      id,
      query
    }
  }

  export function getPostsCount(uid?: number): GlobalActions.GET_Posts_Count {
    return {
      type: GlobalReduxType.GET_Posts_Count,
      uid
    }
  }

  export function getCategoriesCount(uid?: number): GlobalActions.GET_categories_count {
    return {
      type: GlobalReduxType.GET_categories_count,
      uid
    }
  }

  export function getTagsCount(uid?: number): GlobalActions.GET_tags_count {
    return {
      type: GlobalReduxType.GET_tags_count,
      uid
    }
  }

  export function getSocials(uid?: number, query?: any): GlobalActions.GET_Socials {
    return {
      type: GlobalReduxType.GET_Socials,
      uid,
      query
    }
  }

  export function signIn(account: string, password: string): GlobalActions.POST_SignIn {
    return {
      type: GlobalReduxType.SIGNIN,
      account,
      password
    }
  }

  export function signOut(): GlobalActions.POST_SignOut {
    return {
      type: GlobalReduxType.SIGNOUT
    }
  }

  export function register(data: any): GlobalActions.POST_Register {
    return {
      type: GlobalReduxType.USER_REGISTER,
      data
    }
  }

  export function clear_msg(): GlobalActions.SET_msg {
    return {
      type: GlobalReduxType.SET_MESSAGE,
      msgType: 1,
      msgContent: ''
    }
  }

  export function user_auth(): GlobalActions.User_auth {
    return {
      type: GlobalReduxType.USER_AUTH
    }
  }

  export function get_main_info(id: number): GlobalActions.GET_Profile {
    return {
      type: GlobalReduxType.GET_PROFILE,
      id
    }
  }
}

//======================================================================reducers
export function global(state: Global = globalState, action: Global_Response_Action | Global_Notify_Action) {
  switch (action.type) {
    case GlobalReduxType.FETCH_START:
      return { ...state, isFetching: true };
    case GlobalReduxType.FETCH_END:
      return { ...state, isFetching: false };
    case GlobalReduxType.SET_MESSAGE:
      return {
        ...state,
        isFetching: false,
        msg: {
          type: action.msgType,
          content: action.msgContent
        }
      };
    case GlobalReduxType.RESPONSE_USER:
      return {
        ...state, user: action.data
      };
    case GlobalReduxType.RESPONSE_Posts_Count:
      return { ...state, postCount: action.data }
    case GlobalReduxType.RESPONSE_Socials:
      return { ...state, socials: action.data }
    case GlobalReduxType.RESPONSE_tags_count:
      return { ...state, tagCount: action.data }
    case GlobalReduxType.RESPONSE_categories_count:
      return { ...state, categoryCount: action.data }
    case GlobalReduxType.RESPONSE_PROFILE:
      return {
        ...state,
        user: action.user,
        socials: action.socials,
        postCount: action.postCount,
        categoryCount: action.categoryCount,
        tagCount: action.tagCount,
      }
    default:
      return state;
  }
}

export let globalState: Global = {
  isFetching: false,
  msg: {
    type: 0,//0失败 1成功
    content: ""
  },
  user: {
    sex: "",
    id: 5000,
    name: "",
    nickName: "",
    leve: "",
    state: "",
    signature: "",
    email: null,
    avatar: null,
    rights: null,
    birthday: "",
    phone: null
  },
  postCount: 0,
  categoryCount: 0,
  tagCount: 0,
  socials: []
}