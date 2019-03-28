import { AccounAction } from '../actions';
import { User, Account } from '../types/index';
import { ACCOUNT_SIGNIN, ACCOUNT_SIGNOUT } from '../constants/index';
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

export function account(state: Account = initState.account, action: AccounAction): Account {
   switch (action.type) {
      case ACCOUNT_SIGNIN:
         return { ...state, didsignIn: true, user };
      case ACCOUNT_SIGNOUT:
         return state;
   }
   return state;
}