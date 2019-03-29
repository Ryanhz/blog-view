import { GlobalAction } from '../actions/global';
import { User, Account } from '../types/index';
import * as  Global from '../constants/global';
import initState from "../store/initState";

let user = {
   nickname: "hzy",
   profile_photo: "",
   phone: "",
   userId: "",
   email: "",
   birthday: "",
   registration_time: "",
}

export function global(state: Account = initState.account, action: GlobalAction) {
   switch (action.type) {
      case Global.SIGNIN:
         return { ...state, didsignIn: true, user };
      case Global.SIGNOUT:
         return state;
   }
   return state;
}