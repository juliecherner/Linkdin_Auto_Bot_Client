export interface Profile {
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

interface ProfileSorting {
  field: string;
  order: 1 | -1;
}

interface ProfileFiltering {
  isStared: boolean;
}

export interface User {
  _id?: string;
  name: string;
  password: string;
  logged: string;
}

export interface Checkbox {
  _id?: string;
  checked: boolean;
  searchFor: string;
}

export interface Search {
  _id?: string;
  searchWord: string;
}

export interface DispatchUserAction {
  name: string;
  payload: string;
}

export type Token = string;

export interface AuthHeader {
  headers: {
    Authorization: string;
  };
}

export type SortAndFilter =
  | ProfileFiltering
  | ProfileSorting
  | Record<string, never>;
