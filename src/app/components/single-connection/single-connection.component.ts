import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact',
  template: `
    <h3>
      This is the page for the connection: {{ contactId }}
    </h3>
    <a [routerLink]="['/connections']"> Back to list </a>
  `
})
export class SingleConnectionComponent implements OnInit {
  contactId: Number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.contactId = Number(params['id']));
  }
}