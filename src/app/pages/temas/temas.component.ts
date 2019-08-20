import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { TemasService } from '../../services/temas.service';
import { TemaModel } from 'src/app/models/tema.models';
import { CapacitacionModel } from '../../models/capacitacion.models';
import { ItemModel } from 'src/app/models/item.models';
import { PreguntasService } from 'src/app/services/preguntas.service';
import { PreguntaModel } from 'src/app/models/pregunta.models';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html'
})
export class TemasComponent implements OnInit {
  tema:ItemModel;
  capacitacion: CapacitacionModel;
  temas: ItemModel[];
  preguntas: Array<PreguntaModel> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private capacitacionService: CapacitacionService,
    private temaService: TemasService,
    private preguntaService: PreguntasService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.capacitacion = this.capacitacionService.getCapacitacion(params["id"]);
      console.log(this.capacitacion);
      this.temas = this.temaService.getTemasByIdcapa(this.capacitacion.id);

      //console.log(this.temas);
    });
    
    for(let i = 0; i<this.temas.length; i++){
      if(i == 0){
        this.tema = this.temas[i];
      }
    }

    this.preguntas = preguntaService.getPreguntasByIdtema(this.tema.id);
  }

  ngOnInit() {

    //this.tema = this.temaService.getTema(this.capacitacion.id);
    

  }

}
