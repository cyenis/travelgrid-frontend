import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { FileUploader } from "ng2-file-upload";



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
    error: string;
    baseUrl = "http://localhost:3000";
    feedbackEnabled = false;
    processing = false;

    user = this.auth.getUser();
    
    uploader: FileUploader = new FileUploader({
      url: `${this.baseUrl}/auth/upload`
    });

    constructor(
      private auth: AuthService,
      private router: Router
    ) { }

   
    updateUser() {
      this.error = null;
      this.processing = true;
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item: any, response: string) => {
        const fileData = JSON.parse(response);
        this.user.picture = fileData.filename;
      this.auth.updateUser(this.user).subscribe(
        () => this.router.navigate(['/profile']),
        (err) => this.error = err
      );
    }

  
  }

}