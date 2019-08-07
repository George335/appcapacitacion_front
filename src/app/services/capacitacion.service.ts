import { Injectable } from '@angular/core';
import { CapacitacionModel } from '../models/capacitacion.models';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {

  private capacitaciones:CapacitacionModel[] = [
    {
      id: 0,
      nombre: "Antisoborno",
      imagen: "https://ambical.com/web/wp-content/uploads/2017/07/descarga.png",
      video: "https://www.youtube.com/embed/TcKHQtW1-GA"
    },
    {
      id: 1,
      nombre: "Empresa Segura",
      imagen: "https://www.confiep.org.pe/wp-content/uploads/2019/02/def.png",
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcKHQtW1-GA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id: 2,
      nombre: "Gestión Ambiental",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXJB7RmV-aQn4HK3Bv3RmiUa6DJoGdb7uoYEZ5ffbmBWaJRToU",
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcKHQtW1-GA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id: 3,
      nombre: "Gestión Calidad",
      imagen: "https://actualiagrupo.com/wp-content/uploads/2017/08/iso-9001-certificacion-beneficios.jpg",
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcKHQtW1-GA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    },
    {
      id: 4,
      nombre: "Salud Trabajo",
      imagen: "https://static.wixstatic.com/media/57beba_b3aa06143da34628ac8f371fc59c1a74.jpg",
      video: '<iframe width="560" height="315" src="https://www.youtube.com/embed/TcKHQtW1-GA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
    }
  ];

  constructor() { }

  getCapacitaciones():CapacitacionModel[]{
    return this.capacitaciones;
  }

  getCapacitacion( idx: string ){
    return this.capacitaciones[idx];
  }


}
