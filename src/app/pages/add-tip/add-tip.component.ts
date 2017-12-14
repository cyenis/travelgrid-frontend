
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
import { FileUploader } from "ng2-file-upload";
import 'rxjs/add/operator/map';


import { TipService } from '../../services/tip.service';
import { Tip } from '../../models/tip.model';



@Component({
  selector: 'app-add-tip',
  templateUrl: './add-tip.component.html',
  styleUrls: ['./add-tip.component.css']
})
export class AddTipComponent implements OnInit {
  baseUrl = "http://localhost:3000";
  feedbackEnabled = false;
  processing = false;
  tip = {
    filename: "",
    title: null,
    content: null,
    location: null,
    links: null,
    postStatus: null,
    city: null
  };
  // author = loggedin user;
  uploader: FileUploader = new FileUploader({
    url: `${this.baseUrl}/tips/upload`
  });

  constructor(private tipService: TipService, private router: Router) {}






  currentCity: string;
    // Settings for city search bar
    public userSettings2: any = {
      geoTypes: ['(cities)'],
      inputPlaceholderText: 'Search for a city or a destination',
      showCurrentLocation: false,
    };
  
    // Callback for city search bar
    autoCompleteCallback1(selectedData:any) {
      this.currentCity = selectedData.name;
      this.router.navigate(['/cities', this.currentCity]);
    }





  ngOnInit() {}

  handleLocationSelect(informationArray) {
    console.log(informationArray);
    this.tip.title = informationArray[0];
    this.tip.location = {
      type: 'Point',
      coordinates: [informationArray[1].lat(), informationArray[1].lng()]
    };


    this.tip.links.googleMaps = informationArray[2];
  }



  submitForm(theForm) {
    console.log(theForm);
    this.feedbackEnabled = true;
    if (theForm.valid) {
      this.processing = true;
      this.uploader.uploadAll();
      this.uploader.onCompleteItem = (item: any, response: string) => {
        const fileData = JSON.parse(response);
        this.tip.filename = fileData.filename;
        this.tipService
          .createOneTip(this.tip)
          // .subscribe(result => this.router.navigate(['/home']));
          .subscribe(result => {
            console.log('result: ', result);
            this.router.navigate(['/tips/' + result._id]);
          }
        );
      };
    }
  }
}