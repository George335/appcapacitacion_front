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
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html'
})
export class RegistroUsuarioComponent implements OnInit {

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
      id: new FormControl(usuario.id),
      nombre: new FormControl(usuario.nombre, [
        Validators.required,
        Validators.minLength(3)
       // ,
        //Validators.maxLength(3)
        // ,
        // Validators.pattern(/^-?(0|[1-9]\d*)?$/)
      ]),
      apellido: new FormControl(usuario.apellido, Validators.required),
      dni: new FormControl(usuario.dni, Validators.required),
      clave: new FormControl(usuario.clave, Validators.required)
    });
  }

  public setUsuario( usuario: UsuarioModel ) {
    this.usuario.id = this.forma.controls["id"].value;
    this.usuario.nombre = this.forma.controls["nombre"].value;
    this.usuario.apellido = this.forma.controls["apellido"].value;
    this.usuario.dni = this.forma.controls["dni"].value;
    this.usuario.clave = this.forma.controls["clave"].value;

    console.log(this.usuario);
  }

}
