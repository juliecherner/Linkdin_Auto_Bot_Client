export interface I_Profile {
    _id: string;
    name: string;
    companyName: string;
    position: string;
    email: string;
    //linkdinLink:only required field
    //profile link - new name
    linkdinLink: string;
    isEmailSent: boolean;
    isStared: boolean;
    isVmarked: boolean;
    tags: string[];
    imageSrc: string;
    comment: string;
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

export interface Action {
  name: string;
  payload: string;
}