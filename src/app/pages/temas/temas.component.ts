import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { TemasService } from '../../services/temas.service';
import { TemaModel } from 'src/app/models/tema.models';
import { CapacitacionModel } from '../../models/capacitacion.models';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html'
})
export class TemasComponent implements OnInit {

  tema:TemaModel;
  capacitacion: CapacitacionModel;
  temas: TemaModel[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private capacitacionService: CapacitacionService,
    private temaService: TemasService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.capacitacion = this.capacitacionService.getCapacitacion(params["id"]);
      //console.log(this.capacitacion);
    });
  }

  ngOnInit() {

    //this.tema = this.temaService.getTema(this.capacitacion.id);
    this.temas = this.temaService.getTemasByIdcapa(this.capacitacion.id);

  }

}
