import { Injectable } from "@angular/core";
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { environment } from '../../environments/environment';


import { User } from '../models/user.model';


const apiUrl = environment.apiUrl + '/user';


@Injectable()
export class UserService {
  constructor(private http: Http) {}

  getAllUsers(): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
    .get(apiUrl + '/', options)
    .map((res: Response) => res.json());
  }

  getOneUser(userid): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(apiUrl + "/" + userid)
      .map((res: Response) => res.json());
  }

  // FriendRequest(userid, message): Observable<any> {
  //   const options = new RequestOptions();
  //   options.withCredentials = true;
  //   return this.http
  //     .post(baseUrl + "/user/" + userid + "/connections", { message }, options)
  //     .map((res: Response) => res.json());
  // }

}