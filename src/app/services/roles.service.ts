import { Injectable } from '@angular/core';
import { RolesModel } from '../models/roles.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  private rol: RolesModel;

  private roles:RolesModel[] = [
    {
      id: 0,
      nombre: "Administrador"
    },
    {
      id: 1,
      nombre: "Trabajador"
    }
  ];

  constructor() { }

  getRol(idrol: number) {
    for (let i = 0; i < this.roles.length; i++) {
      if (this.roles[i].id == idrol) {
        this.rol = this.roles[i];
        //console.log(this.temas[i]);
      }
    }

    return this.rol;
  }

}
