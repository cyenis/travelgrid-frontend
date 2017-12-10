import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  template: `
    <table>
      <tr>
        <th> Id</th>
        <th> Name </th>
        <th colspan="2"> Details </th>
      </tr>
      <tr *ngFor="let contact of contacts">
        <td> {{ contact.id }} </td>
        <td> {{ contact.name }} </td>
        <td>
          <button (click)="viewDetails(contact.id)"> details (btn)  </button>
        </td>
        <td>
          <a [routerLink]="['/connections',contact.id]"> details (link) </a>
        </td>
      </tr>
    </table>
  `,
  styles: [`td { min-width: 50px; padding: 10px; text-align: center; }`]
})
export class ConnectionListComponent implements OnInit {

  contacts: Array<Object> = [
    { id: 100, name: 'Andy' },
    { id: 201, name: 'George' },
    { id: 302, name: 'Max' },
    { id: 602, name: 'Kokos' }
    
  ];

  constructor(private router: Router) { }

  ngOnInit() {}

  viewDetails(id) {
    this.router.navigate(['contact', id]);
  }
}