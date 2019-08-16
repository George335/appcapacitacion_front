import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../services/login.service';
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { UsuarioModel } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-registro-capacitacion',
  templateUrl: './registro-capacitacion.component.html'
})
export class RegistroCapacitacionComponent implements OnInit {

  forma: FormGroup;
  usuario = new UsuarioModel();
 
  constructor() { 
    this.setForma(this.usuario);
  }

  ngOnInit() {
  }

  guardar() {
    this.setUsuario(this.usuario);
  }

  public setForma( usuario: UsuarioModel ) {
    // console.log(this.forma);
    console.log(usuario);
    this.forma = new FormGroup({
      nombre: new FormControl(usuario.nombre, [
        Validators.required,
        Validators.minLength(3)
       // ,
        //Validators.maxLength(3)
        // ,
        // Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ])
    });
  }

  public setUsuario( usuario: UsuarioModel ) {
    this.usuario.nombre = this.forma.controls["nombre"].value;

    console.log(this.usuario);
  }

}
