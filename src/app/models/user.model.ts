export class User {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
    livingIn:
    {
     location: {
       latitude: String,
       longitude: String
     },
     placeName: {
     type: String,
   },
     link: {
       type: String
     },
   };
   cityFrom:
   {
    location: {
      latitude: String,
      longitude: String
    },
    placeName: {
    type: String,
  },
    link: {
      type: String
    },
  };
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
  }