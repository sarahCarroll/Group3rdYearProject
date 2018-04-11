import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AddPage } from '../add/add';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //public array to store the information from database
  public myDataArray: any[];
  public myCountArray: any[];


  constructor(public navCtrl: NavController, public http: Http) {
  }

  myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    console.log("test");
  }

  ionViewWillEnter() {


    var parameters = {
      _fn: 'getHerdNumbers'
    }

    var changes = {
      _fn: 'getNumberOfAnimals'
    }


    this.http.post('http://104.199.57.94/api/', parameters).subscribe((data) => {

      console.log(data['_body']);
      this.myDataArray = (JSON.parse(data['_body']));
    },
      err => { console.log(err) });

    this.http.post('http://104.199.57.94/api/', changes).subscribe((data) => {

      console.log(JSON.parse(data['_body']));
      this.myCountArray = Array.of(JSON.parse(data['_body']));
    },



      err => { console.log(err) });
    console.log("hello just called get");
  }
}