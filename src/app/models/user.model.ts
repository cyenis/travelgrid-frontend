export class User {
    id: string;
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    picture: string;
    
    constructor(obj: Object = {}) {
      Object.assign(this, obj);
    }
  }