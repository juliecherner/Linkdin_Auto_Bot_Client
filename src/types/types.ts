export interface I_Profile {
  _id: string;
  name: string;
  position: string;
  profileLink: string;
  isEmailSent: boolean;
  isStared: boolean;
  isVmarked: boolean;
  tags: string[];
  imageSrc: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface I_User {
  _id?: string;
  name: string;
  password: string;
  logged: string;
}

export interface I_Checkbox {
  _id?: string;
  checked: boolean;
  searchFor: string;
}

export interface I_Search {
  _id?: string;
  searchWord: string;
}

export interface I_DispatchUserAction {
  name: string;
  payload: string;
}

export type I_Token = string;

export interface I_AuthHeader {
  headers: {
    Authorization: string;
  };
}
