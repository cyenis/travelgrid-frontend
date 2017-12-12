import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../models/user.model'
import { Router } from '@angular/router'

import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment'

import { FileUploader } from "ng2-file-upload";

const URL = environment.apiUrl + '/auth/upload';





@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  user = null;
  subscriptions = [];
  saving = false;
  apiUrl = environment.apiUrl;
  editUser = new User;
  userData: User;
  file: any;
  picUrl = environment.apiUrl;



  public uploader: FileUploader = new FileUploader({url: URL})
  feedback: string;




  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.me();
    this.user = this.authService.getUser();
    this.uploader.onSuccessItem = (item, response) => {
      this.feedback = JSON.parse(response).message;
    };
    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.feedback = JSON.parse(response).message;
    };

 }

}
