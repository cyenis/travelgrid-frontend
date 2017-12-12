import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule, MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

// Services
import { Router } from '@angular/router';
import { TipService } from "../../services/tip.service";
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-map-all-connections',
  templateUrl: './map-all-connections.component.html',
  styleUrls: ['./map-all-connections.component.css']
})
export class MapAllConnectionsComponent implements OnInit {

  users = null;
  
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;

  information: Array<any> = [];

  public name: string;

  // public place: google.maps.places.PlaceResult;
  @Input() location: Object;

  @Output() onSelect = new EventEmitter<Object>();

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {

     // Get ALL USERS @TODO change to connections
  this.userService.getAllUsers().subscribe(data => {
    this.users = data;
    console.log('This is the map talking!' , this.users);
  });
  
    // set google maps defaults
    this.zoom = 4;
    this.latitude = 41.397852;
    this.longitude = 2.164561;

    // create search FormControl
    this.searchControl = new FormControl();

    // set current position
    this.setCurrentPosition();


    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['geocode']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          // set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;

          this.information.push( place.name, place.geometry.location, place.url);
          this.onSelect.emit(this.information);
        });
      });
    });
  }

  private setCurrentPosition() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}