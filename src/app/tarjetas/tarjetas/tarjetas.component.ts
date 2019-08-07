import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitacionModel } from '../../models/capacitacion.models';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() objCapacitaciones: CapacitacionModel[] = []; 

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  verTema( id: number ) {

    this.router.navigate([ '/tema', id  ]);

  }

}
