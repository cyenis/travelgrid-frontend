import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  currentCity: string;
  


  // https://tanoy009.github.io/ng4-geoautocomplete/docs/

 // Settings for city search bar
 public userSettings2: any = {
  geoTypes: ['(cities)'],
  inputPlaceholderText: 'Search for a city to view stats...',
  showCurrentLocation: false,
};

// Callback for city search bar
autoCompleteCallback1(selectedData:any) {
  this.currentCity = selectedData.name;
  // this.router.navigate(['/destination', this.currentCity]);
}

// Cities to diplay in 'Popular cities'
  cityItems = [
    {
      name: 'Barcelona',
      photo: 'https://static.independent.co.uk/s3fs-public/styles/article_small/public/thumbnails/image/2017/05/15/11/sagrada-familia-barcelona.jpg',
    },
    {
      name: 'London',
      photo: 'https://cdn.londonandpartners.com/visit/general-london/areas/westminster-st-james/60262-640x360-parliament-bridge-640.jpg',
    },
    {
      name: 'New York',
      photo: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg',
    },
    
    {
      name: 'Berlin',
      photo: 'https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748',
    },
    {
      name: 'Stockholm',
      photo: 'https://d3n8a8pro7vhmx.cloudfront.net/icf/pages/279/attachments/original/1461166567/Stockholm-Sweden-Riddarholmen-ChurchBy-Unknown.jpg?1461166567',
    },
    {
      name: 'Bangkok',
      photo: 'http://static.asiawebdirect.com/m/bangkok/portals/bangkok-com/shared/teasersL/TOURS/discover-bangkok-in-2-days/teaserMultiLarge/imageHilight/bangkok-day-trip.jpg',
    },
 
    {
      name: 'Tokyo',
      photo: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/tokyo-mud-bath-bar-mudbath0716.jpg?itok=dJ8lDXJh',
    },
 
    {
      name: 'Los Angeles',
      photo: 'https://d26oc3sg82pgk3.cloudfront.net/files/media/uploads/zinnia/2016/07/26/shutterstock_186048416.jpg.644x671_q100.jpg',
    },
    {
      name: 'Vienna',
      photo: 'https://lonelyplanetwp.imgix.net/2017/07/shutterstock_233157673-390cfc6cd05b.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748',
    },
    {
      name: 'Rome',
      photo: 'http://www.telegraph.co.uk/content/dam/video_previews/l/n/lnmmzznze6qxo0ddc4ajydmzur-2xcfh-xlarge.jpg',
    },
    {
      name: 'Paris',
      photo: 'http://www.parisattitude.com/images/monuments.jpg',
    },
    {
      name: 'Sydney',
      photo: 'https://lonelyplanetimages.imgix.net/mastheads/65830387.jpg?sharp=10&vib=20&w=1200',
    },
  
  ]



}
