import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitacionModel } from '../../models/capacitacion.models';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styles: []
})
export class BodyComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {
  }
  
}
