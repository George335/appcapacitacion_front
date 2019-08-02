import { Component, OnInit } from '@angular/core';
import { TemaModel } from 'src/app/models/tema.models';
import { TemasService } from 'src/app/services/temas.service';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { CapacitacionModel } from '../../models/capacitacion.models';

@Component({
  selector: 'app-capacitacion',
  templateUrl: './capacitacion.component.html'
})
export class CapacitacionComponent implements OnInit {

  capacitaciones:CapacitacionModel[] = [];

  //temas: TemaModel[] = [];

  // temas :string[] = ['Gestión Antisoborno', 
  //                     'Certificación a empresa segura de discriminación', 
  //                     'Gestión Ambiental', 
  //                     'Gestión de Calidad',
  //                     'Gestión de la seguridad y salud en el trabajo'
  //                   ];

  constructor(
    private capacitacionService: CapacitacionService
  ) { 

  }

  ngOnInit() {
    this.capacitaciones = this.capacitacionService.getCapacitaciones();
  }

}
