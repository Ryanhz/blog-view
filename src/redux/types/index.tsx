export interface StoreState {
  account: Account
}

export interface Account {
  didsignIn: boolean
  user: User
}

export interface User {
  nickname: string,
  profile_photo: string,
  phone: string,
  userId: string,
  email: string,
  birthday: string,
  registration_time: string,
}
