import { Component, OnInit } from '@angular/core';
import { Servicios_De_Lanzamiento } from './lanzamientos.services';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {


  
  lanzamientos : any;
  constructor(public lanzador: Servicios_De_Lanzamiento) { }
  ngOnInit(){

    this.lanzador.getLaunch().subscribe
    (
      (r) => {this.lanzamientos = r; console.log(r);},
      (err) => {console.log(err);}
    )
  }

}
