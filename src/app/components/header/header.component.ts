import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  // Toggle the mobile view menu
  toggleMenu() {
    this.toggle=!this.toggle;
  }

  // Callback from city search bar
  autoCompleteCallback1(selectedData:any) {
    this.currentCity = selectedData.name
    this.notify.emit(this.currentCity);
    this.router.navigate(['/cities', this.currentCity]);
  }

  // Settings for city search bar
  public userSettings2: any = {
    geoTypes: ['(cities)'],
    inputPlaceholderText: 'Search for a city...',
    showCurrentLocation: false,
  };



}
