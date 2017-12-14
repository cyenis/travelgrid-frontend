import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { FileUploader } from "ng2-file-upload";
import { environment } from '../../../environments/environment'


const apiUrl = environment.apiUrl + '';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  error: string;
  baseUrl = environment.apiUrl;
  feedbackEnabled = false;
  processing = false;

  user = this.auth.getUser();
  
  serverUrl = environment.apiUrl;
  
  uploader: FileUploader = new FileUploader({
    url: `${this.baseUrl}/auth/upload`
  });

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  private postUpdateUser() {
    this.auth.updateUser(this.user).subscribe(
      () => this.router.navigate(['/profile']),
      (err) => this.error = err
    );
  }

  handleCityLivingIn(informationArray) {
    console.log(informationArray);    
    this.user.livingIn.placeName = informationArray[0];
    this.user.livingIn.location.latitude = informationArray[1].lat();
    this.user.livingIn.location.longitude = informationArray[1].lng();
    this.user.livingIn.link = informationArray[2];
  }


  handleCityFromChange(informationArray) {
    console.log(informationArray);    
    this.user.cityFrom.placeName = informationArray[0];
    this.user.cityFrom.location.latitude = informationArray[1].lat();
    this.user.cityFrom.location.longitude = informationArray[1].lng();
    this.user.cityFrom.link = informationArray[2];
  }


  updateUser(form) {
    this.error = null;
    this.feedbackEnabled = true;
    if (!form.valid) {
      return;
    }
    this.processing = true;
    if (this.uploader.queue.length) {
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item: any, response: string) => {
        const fileData = JSON.parse(response);
        this.user.picture = fileData.filename;
        this.postUpdateUser();
      } 
    }
    else {
      this.postUpdateUser();
    }
  }
}