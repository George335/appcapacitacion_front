import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CapacitacionModel } from 'src/app/models/capacitacion.models';

@Component({
  selector: 'app-tarjetas-administrador',
  templateUrl: './tarjetas-administrador.component.html'
})
export class TarjetasAdministradorComponent implements OnInit {

  @Input() objCapacitaciones: CapacitacionModel[] = []; 

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  verTema( id: number ) {

    this.router.navigate([ '/temas', id  ]);

  }

}
