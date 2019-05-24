import { Global_Response_Action, Global_Notify_Action } from '../actions/global';
import { Global } from '../types/index';
import * as  Types from '../constants/global';
import { globalState } from "../store/initState";

export function global(state: Global = globalState, action: Global_Response_Action | Global_Notify_Action) {
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
      case Types.RESPONSE_USER:

         return {
            ...state, user: { ...action.data }
         };
      case Types.RESPONSE_MAININFO:
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