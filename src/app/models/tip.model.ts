export class Tip {
    id: string;
    title: string;
    content: string;
    postStatus: string;
    picture: string;
    location: Object;
    destination: string;
    user_id: string;

    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
  }