import { Component, OnInit } from '@angular/core';
import { CapacitacionService } from 'src/app/services/capacitacion.service';
import { CapacitacionModel } from '../../models/capacitacion.models';
import { Router } from '@angular/router';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-listado-isos',
  templateUrl: './listado-isos.component.html'
})
export class ListadoIsosComponent implements OnInit {

  capacitaciones:CapacitacionModel[] = [];

  constructor(
    private capacitacionService: CapacitacionService, 
    private router: Router
  ) { 

  }

  ngOnInit() {
    this.capacitaciones = this.capacitacionService.getCapacitaciones();
  }

  verTema( id : number ) {
    
    this.router.navigate( ['/verPreguntasItemCapacitacion', id] );

    console.log(id);
  }


}
