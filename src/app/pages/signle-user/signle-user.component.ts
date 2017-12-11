import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-signle-user',
  templateUrl: './signle-user.component.html',
  styleUrls: ['./signle-user.component.css']
})
export class SignleUserComponent implements OnInit {

  user = null;
  
  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.userService.getOneUser(params.id).subscribe(data => {
        this.user = data;
      });
    });
  }

}
