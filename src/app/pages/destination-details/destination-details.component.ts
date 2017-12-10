import { Component, OnInit } from '@angular/core';

import { CityService } from '../../services/city.service'

// import { CityTrailService } from '../../services/city-trail.service'

import { AuthService } from '../../services/auth.service'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-destination-details',
  templateUrl: './destination-details.component.html',
  styleUrls: ['./destination-details.component.css']
})
export class DestinationDetailsComponent implements OnInit {



  
  constructor() { }

  ngOnInit() {
  }

}
