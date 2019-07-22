import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() objTemas: string[] = [];

  constructor( private router: Router ) { }

  ngOnInit() {
  }

  verTema( mensaje: string ) {

    console.log(mensaje);

    this.router.navigate([ '/tema', mensaje  ]);

  }

}
