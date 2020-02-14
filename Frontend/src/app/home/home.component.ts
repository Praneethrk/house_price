import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loc: any;
  name:any;
  sqft: any;
  bhk: any;
  bath: any;
  location:any;
  price;
  estimate:Boolean = false;
  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.get_location_names().subscribe(res =>{
      this.location = res['locations']
    })
  }
  submit(){
    let data = {
      "location" : this.loc,
      "total_sqft" : this.sqft,
      "bhk":this.bhk,
      "bath":this.bath
    }
    this.appService.predict_home_price(data).subscribe(res =>{
      this.price = res['estimated_price']
      this.estimate = true
    })
  }

}
