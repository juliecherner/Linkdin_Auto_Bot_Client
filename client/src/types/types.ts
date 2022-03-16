export interface I_Profile {
    _id: string;
    name: string;
    companyName: string;
    position: string;
    email: string;
    //linkdinLink:only required field
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