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
       latitude: Number,
       longitude: Number
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
      latitude: Number,
      longitude: Number
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