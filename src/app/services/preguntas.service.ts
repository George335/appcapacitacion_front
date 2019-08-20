import { Injectable } from '@angular/core';
import { PreguntaModel } from '../models/pregunta.models';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  private preguntaList: Array<PreguntaModel> = [];
  private preguntas:PreguntaModel[] = [
    {
      id: 0,
      pregunta1: "¿Pregunta 1?",
      pregunta2: "¿Pregunta 2?",
      pregunta3: "¿Pregunta 3?",
      iditem: 0,
    },
    {
      id: 1,
      pregunta1: "¿Pregunta 1?",
      pregunta2: "¿Pregunta 2?",
      pregunta3: "¿Pregunta 3?",
      iditem: 0,
    },
    {
      id: 2,
      pregunta1: "¿Pregunta 1?",
      pregunta2: "¿Pregunta 2?",
      pregunta3: "¿Pregunta 3?",
      iditem: 1,
    },
    {
      id: 3,
      pregunta1: "¿Pregunta 1?",
      pregunta2: "¿Pregunta 2?",
      pregunta3: "¿Pregunta 3?",
      iditem: 2,
    },
    {
      id: 4,
      pregunta1: "¿Pregunta 1?",
      pregunta2: "¿Pregunta 2?",
      pregunta3: "¿Pregunta 3?",
      iditem: 3,
    }
  ];

  constructor() { }

  getPreguntas():PreguntaModel[]{
    return this.preguntas;
  }

  getPregunta( idx: number ){
    return this.preguntas[idx];
  }

  getPreguntasByIdtema(iditem: number): PreguntaModel[] {

    this.preguntaList.length = 0; //Inicializamos la lista en 0
    
    for (let i = 0; i < this.preguntas.length; i++) {

      if (this.preguntas[i].iditem == iditem) {

        this.preguntaList.push(this.preguntas[i]);

      }
    }

    //console.log(this.empList);

    return this.preguntaList;
  }


}
