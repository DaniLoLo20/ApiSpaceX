import { Component, OnInit } from '@angular/core';
import { Misiones_Services } from '../missions/services';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

 

  

  misones : any;
  constructor(public mision: Misiones_Services) { }
  ngOnInit(){

    this.mision.getMissions().subscribe
    (
      (r) => {this.misones = r; console.log(r);},
      (err) => {console.log(err);}
    )
  }
  
}
