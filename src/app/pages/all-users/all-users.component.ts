import { Component, OnInit } from '@angular/core';

// Import Services
import { TipService } from "../../services/tip.service";
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users = null;
  


  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }

}
