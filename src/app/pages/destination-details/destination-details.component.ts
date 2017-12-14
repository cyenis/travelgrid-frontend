import { Component, OnInit, Input } from '@angular/core';

import { TipService } from "../../services/tip.service";

import { CityService } from '../../services/city.service'

import { CityTrailService } from '../../services/city-trail.service'


import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {
 
  @Input() city: string;
  
    country: string
  
    tipList: any;
    userList: any;
    
  
    cityIndices: Object;
    photoReference: string;
    photoURL: string;
    qualityOfLifeIndex: number;
    costOfLivingIndex: number;
    propPriceIncomeRatio: number;
    currency: string;
    climateInfo: Object;
    prices: any;
    showInput = false;


  users = null;
  
  constructor(
    private cities: CityService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private userService: UserService,
    private cityTrailService: CityTrailService,
    private tipService: TipService
  ) {}

  // Listen to change in route and set data for new city
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.city = params['id']
      this.cityTrailService.pushCity(this.city)
      this.getPhotoReference();

      this.tipService.getCityTips(this.city)
        .subscribe((tips) => {
          this.tipList = tips;
          this.tipList.sort((a, b) => {
            a = new Date(a.date);
            b = new Date(b.date);
            return b - a
          });
          if (this.tipList.length > 4) {
            this.tipList.length = 4
          }
        });

        this.userService.getCityUsers(this.city)
        .subscribe((user) => {
          this.userList = user;
          // this.tipList.sort((a, b) => {
          //   a = new Date(a.date);
          //   b = new Date(b.date);
          //   return b - a
          // });
          if (this.userList.length > 4) {
            this.userList.length = 4
          }
        });






    });
  }


// Use google api to retreive photo reference
getPhotoReference() {
  this.cities.getPhotoReference(this.city)
    .subscribe((info) => {
      this.photoReference = info.results[0] && info.results[0].photos[0].photo_reference;
      this.getPhoto()
    });
}

// Use photo reference to call google photo api to retrieve photo
getPhoto() {
  this.cities.getPhoto(this.photoReference)
    .subscribe((photo) => {
      this.photoURL = photo.location;
    });
}


 // Retrieve city specific tips
  getCityTips() {
    this.tipService.getCityTips(this.city)
      .subscribe((tips) => {
        this.tipList = tips;
        this.tipList.sort((a, b) => {
          a = new Date(a.date);
          b = new Date(b.date);
          return a - b;
        });
      });
  }


 // Retrieve people living in this city now
 getCityUsers() {
  this.userService.getCityUsers(this.city)
    .subscribe((user) => {
      this.userList = user;
      this.userList.sort((a, b) => {
        a = new Date(a.date);
        b = new Date(b.date);
        return a - b;
      });
    });
}








}
