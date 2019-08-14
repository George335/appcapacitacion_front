import { Component, OnInit } from '@angular/core';
import { CapacitacionModel } from 'src/app/models/capacitacion.models';
import { CapacitacionService } from 'src/app/services/capacitacion.service';

@Component({
  selector: 'app-capacitacion-administrador',
  templateUrl: './capacitacion-administrador.component.html'
})
export class CapacitacionAdministradorComponent implements OnInit {

  capacitaciones:CapacitacionModel[] = [];
  
  constructor(
    private capacitacionService: CapacitacionService
  ) { 

  }

  ngOnInit() {
    this.capacitaciones = this.capacitacionService.getCapacitaciones();
  }

}
