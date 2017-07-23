import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  latitude: string;
  longitude:string;
  homes: Array<any>;
  

  constructor(private http:Http) {
  
     


   }

   getLocation(): void {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition.bind(this));
    } 
}
showPosition(position): void {
    //this.latitude = position.coords.latitude; 
    //this.longitude = position.coords.longitude;
     this.http.get('https://api.foursquare.com/v2/venues/search?v=20161016&ll='+ position.coords.latitude +'%2C'+ position.coords.longitude +'&query=coffee&limit=10&intent=checkin&radius=1000&client_id=Q1DH4NA3YEH5HD2FKSVQDGFP34SN3C0IPFDUFXD40D4GQBJP&client_secret=QAFXMR13HDEW40SPXZYJV1YEAH31AFCUYZOZWCWZ5ZVXPS51')
        .map(response => response.json())
       .subscribe(res => this.homes = res.response.venues);
}

  ngOnInit() {

      this.getLocation();
  }

}
