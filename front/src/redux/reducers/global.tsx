import { GlobalAction } from '../actions/global';
import { Global } from '../types/index';
import * as  Types from '../constants/global';
import { globalState } from "../store/initState";

let user = {
   nickname: "hzy",
   profile_photo: "",
   phone: "",
   userId: "",
   email: "",
   birthday: "",
   registration_time: "",
}

export function global(state: Global = globalState, action: GlobalAction) {
   switch (action.type) {
      case Types.FETCH_START:
         return { ...state, isFetching: true };
      case Types.FETCH_END:
         return { ...state, isFetching: false };
      case Types.SET_MESSAGE:
         return {
            ...state,
            isFetching: false,
            msg: {
               type: action.msgType,
               content: action.msgContent
            }
         };
      case Types.RESPONSE_USER_INFO:
         return {
            ...state, userInfo: action.data
         };
      default:
         return state;
   }
}