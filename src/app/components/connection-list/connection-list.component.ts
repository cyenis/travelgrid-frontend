import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { MatTabGroup } from '@angular/material';
import { MatTab } from '@angular/material';

import { TipService } from "../../services/tip.service";
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-contact-list',
  templateUrl: './connection-list.component.html',  
  styleUrls: ['./connection-list.component.css']  
})
export class ConnectionListComponent implements OnInit {

  users = null;
  

  
  constructor(private userService: UserService, private router: Router) {}
  
  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
  }


  // handleFilterChange(result) {
  //   this.users = result;
  // }

  showResults(event) {
    if (1) {
      // this.resultVisible = false;
      // this.filterVisible = true;
      event.srcElement.innerHTML = `Show results: `;
    } 
    // else {
    //   this.resultVisible = true;
    //   // this.filterVisible = false;
    //   event.srcElement.innerHTML = 'Edit filters';
    // }
  }

  activateMap() {
    // this.mapActive = true;
    // console.log(this.mapActive);

  }









}











// template: `
// <table>
//   <tr>
//     <th> Id</th>
//     <th> Name </th>
//     <th colspan="2"> Details </th>
//   </tr>
//   <tr *ngFor="let contact of contacts">
//     <td> {{ contact.id }} </td>
//     <td> {{ contact.name }} </td>
//     <td>
//       <button (click)="viewDetails(contact.id)"> details (btn)  </button>
//     </td>
//     <td>
//       <a [routerLink]="['/connections',contact.id]"> details (link) </a>
//     </td>
//   </tr>
// </table>
// `

// styles: [`td { min-width: 50px; padding: 10px; text-align: center; }`]