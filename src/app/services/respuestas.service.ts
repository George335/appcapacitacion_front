import { Injectable } from '@angular/core';
import { RespuestaModel } from '../models/respuesta.models';

@Injectable({
  providedIn: 'root'
})
export class RespuestasService {

  private respuestas:RespuestaModel[] = [
    {
      id: 0,
      descripcion: ['Sí','No'],
      idpregunta: 0,
    },
    {
      id: 1,
      descripcion: ['Sí','No'],
      idpregunta: 0,
    },
    {
      id: 2,
      descripcion: ['Sí','No'],
      idpregunta: 1,
    },
    {
      id: 3,
      descripcion: ['Sí','No'],
      idpregunta: 2,
    },
    {
      id: 4,
      descripcion: ['Sí','No'],
      idpregunta: 3,
    },
  ];

  constructor() { }

  getRespuestas():RespuestaModel[]{
    return this.respuestas;
  }

  getRespuesta( idx: number ){
    return this.respuestas[idx];
  }


}
