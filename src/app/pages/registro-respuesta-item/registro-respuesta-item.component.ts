import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RespuestaModel } from '../../models/respuesta.models';

@Component({
  selector: 'app-registro-respuesta-item',
  templateUrl: './registro-respuesta-item.component.html'
})
export class RegistroRespuestaItemComponent implements OnInit {

  forma: FormGroup;
  respuesta = new  RespuestaModel();

  constructor() {
    this.setForma(this.respuesta);
  }

  ngOnInit() {
  }

  public setForma(respuesta: RespuestaModel) {

    this.forma = new FormGroup({

      respuestas: new FormArray([
        new FormControl('', Validators.required )
      ])

      
    });
  }

  agregarRespuesta(){
    (<FormArray>this.forma.controls['respuestas']).push(
      new FormControl( '', Validators.required )
    )
  }

  guardarCambios() {
    console.log(this.forma.value['respuestas']);
    //console.log(this.usuario);
    

    // this.forma.reset( { 
    //   nombrecompleto:{
    //     nombre: "",
    //     apellido: ""
    //   },
    //   correo:""
    //  } );

    // this.forma.controls['correo'].setValue('Nuevocorreo@dasdas.com')

  }

}
