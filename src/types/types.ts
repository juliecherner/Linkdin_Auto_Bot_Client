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
  _id?: String;
  name?: String;
  password: String;
  email: String;
}

export interface I_Checkbox {
  _id?: string;
  checked: boolean;
  searchFor: string;
}

export interface I_Search{
  _id?: string;
  _v?: number;
  searchWord: string
}

export interface Action {
  name: string;
  payload: string;
}
