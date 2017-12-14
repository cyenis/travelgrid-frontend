export class Tip {
    id: string;
    title: string;
    content: string;
    postStatus: string;
    picture: string;
    location: {
      latitude: Number,
      longitude: Number
    };
     city: string;
     user_id: string;

    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
  }