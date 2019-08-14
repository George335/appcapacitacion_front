import { Component, OnInit } from '@angular/core';
import { TemaModel } from 'src/app/models/tema.models';
import { CapacitacionModel } from 'src/app/models/capacitacion.models';
import { ActivatedRoute } from '@angular/router';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { TemasService } from 'src/app/services/temas.service';

@Component({
  selector: 'app-ver-preguntas-item-capacitacion',
  templateUrl: './ver-preguntas-item-capacitacion.component.html'
})
export class VerPreguntasItemCapacitacionComponent implements OnInit {
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
      console.log(this.capacitacion);
      this.temas = this.temaService.getTemasByIdcapa(this.capacitacion.id);

    });
  }

  ngOnInit() {

    //this.tema = this.temaService.getTema(this.capacitacion.id);
    

  }

}
