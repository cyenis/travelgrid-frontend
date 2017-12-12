import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
    error: string;

    user = this.auth.getUser();
    

    constructor(
      private auth: AuthService,
      private router: Router
    ) { }

   
    updateUser() {
      this.error = null;
      this.auth.updateUser(this.user).subscribe(
        () => this.router.navigate(['/profile']),
        (err) => this.error = err
      );
    }

  
  }