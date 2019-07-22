import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styles: []
})
export class TarjetasComponent implements OnInit {

  @Input() objTemas: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  verArtista( mensaje: string ) {

    console.log(mensaje);

    // this.router.navigate([ '/artist', artistaId  ]);

  }

}
