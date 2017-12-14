
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';


import { Tip } from '../models/tip.model';


const apiUrl = environment.apiUrl + '/tips';


@Injectable()
export class TipService {
  constructor(private http: Http) {}


  getAllTips(): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(apiUrl + '/', options)
      .map((res: Response) => res.json());
  }

  getOneTip(tipid): Observable<any> {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
      .get(apiUrl + '/'+ tipid, options)
      .map((res: Response) => res.json());
  }

  createOneTip(formData) {
    const options = new RequestOptions();
    options.withCredentials = true;
    return this.http
    .post(apiUrl + '/add', formData, options)
      .map((res: Response) => res.json());
  }


  getCityTips(city: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `/citytips/${city}`, options)
      .map((res) => res.json());
  }

  getUserTips(userId: string) {
    let options = new RequestOptions();
    options.withCredentials = true;
    return this.http.get(apiUrl + `/usertips/${userId}`, options)
      .map((res) => res.json());
    }












}