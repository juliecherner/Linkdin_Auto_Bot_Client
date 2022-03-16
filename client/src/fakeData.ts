export interface I_Owner {
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

export const data: I_Owner[] = [
  {
    _id: `1`,
    name: `moshe`,
    companyName: `company1`,
    position: `ceo`,
    email: `email1@mymail.com`,
    linkdinLink: `url1`,
    isStared: true,
    isEmailSent: false,
    isVmarked: true,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: ``,
    tags: [`tag1`, `tag2`, `tag3`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `2`,
    name: `danny`,
    companyName: `company2`,
    position: `cto`,
    email: `email2@mymail.com`,
    linkdinLink: `url2`,
    isStared: false,
    isEmailSent: false,
    isVmarked: true,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string2`,
    tags: [`tag4`, `tag5`, `tag6`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `3`,
    name: `timmy`,
    companyName: `company3`,
    position: `ceo`,
    email: `email3@mymail.com`,
    linkdinLink: `url3`,
    isStared: false,
    isEmailSent: false,
    isVmarked: true,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string3`,
    tags: [`tag3`, `tag4`, `tag5`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `4`,
    name: `timmy`,
    companyName: `company4`,
    position: `cto`,
    email: `email4@mymail.com`,
    linkdinLink: `url4`,
    isStared: true,
    isEmailSent: false,
    isVmarked: false,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string4`,
    tags: [`tag1`, `tag2`, `tag3`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `5`,
    name: `yossi`,
    companyName: `company5`,
    position: `ceo`,
    email: `email5@mymail.com`,
    linkdinLink: `url5`,
    isStared: false,
    isEmailSent: false,
    isVmarked: false,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string5`,
    tags: [`tag2`, `tag3`, `tag4`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `6`,
    name: `johney`,
    companyName: `company6`,
    position: `cto`,
    email: `email6@mymail.com`,
    linkdinLink: `url6`,
    isStared: false,
    isEmailSent: false,
    isVmarked: false,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string6`,
    tags: [`tag3`, `tag4`, `tag5`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `7`,
    name: `yaniv`,
    companyName: `company7`,
    position: `ceo`,
    email: `email7@mymail.com`,
    linkdinLink: `url7`,
    isStared: false,
    isEmailSent: false,
    isVmarked: false,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string7`,
    tags: [`tag1`, `tag6`, `tag7`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `8`,
    name: `joey`,
    companyName: `company8`,
    position: `cto`,
    email: `email8@mymail.com`,
    linkdinLink: `url8`,
    isStared: false,
    isEmailSent: false,
    isVmarked: false,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string8`,
    tags: [`tag1`, `tag4`, `tag6`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `9`,
    name: `avram`,
    companyName: `company9`,
    position: `ceo`,
    email: `email9@mymail.com`,
    linkdinLink: `url9`,
    isStared: false,
    isEmailSent: false,
    isVmarked: false,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string9`,
    tags: [`tag1`, `tag2`, `tag5`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    _id: `10`,
    name: `yakov`,
    companyName: `company10`,
    position: `cto`,
    email: `email10@mymail.com`,
    linkdinLink: `url10`,
    isStared: false,
    isEmailSent: false,
    isVmarked: false,
    imageSrc: `https://www.pikpng.com/pngl/m/451-4516677_cartoon-person-without-face-clipart.png`,
    comment: `string10`,
    tags: [`tag1`, `tag3`, `tag5`],
    createdAt: new Date(),
    updatedAt: new Date()
  },
];
