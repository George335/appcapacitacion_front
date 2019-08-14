import { Injectable } from "@angular/core";
import { TemaModel } from "../models/tema.models";

@Injectable({
  providedIn: "root"
})
export class TemasService {
  private tema: TemaModel;
  
  private temaList: Array<TemaModel> = [];
  private temas: TemaModel[] = [
    {
      id: 0,
      nombre: "Contexto de la organización",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 0
    },
    {
      id: 1,
      nombre: "Liderazgo",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 0
    },
    {
      id: 2,
      nombre: "Planificación",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 0
    },
    {
      id: 3,
      nombre: "Apoyo",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 0
    },
    {
      id: 4,
      nombre: "Operación",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 0
    },
    {
      id: 5,
      nombre: "Evaluación de desempeño",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 0
    },
    {
      id: 6,
      nombre: "Mejora",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 0
    },
    {
      id: 7,
      nombre: "Radiofrecuencia",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA",
      idcapacitacion: 1
    }
  ];

  constructor() {}

  getTemas(): TemaModel[] {
    return this.temas;
  }

  getTemasByIdcapa(idcap: number): TemaModel[] {

    this.temaList.length = 0; //Inicializamos la lista en 0
    
    for (let i = 0; i < this.temas.length; i++) {

      if (this.temas[i].idcapacitacion == idcap) {

        this.temaList.push(this.temas[i]);

      }
    }

    //console.log(this.empList);

    return this.temaList;
  }

  getTema(idcap: number) {
    for (let i = 0; i < this.temas.length; i++) {
      if (this.temas[i].idcapacitacion == idcap) {
        this.tema = this.temas[i];
        //console.log(this.temas[i]);
      }
    }

    return this.tema;
  }
}
