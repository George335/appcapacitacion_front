import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RespuestaModel } from '../../models/respuesta.models';

@Component({
  selector: 'app-registro-respuesta-item',
  templateUrl: './registro-respuesta-item.component.html'
})
export class RegistroRespuestaItemComponent implements OnInit {

  forma: FormGroup;
  forma2: FormGroup;
  forma3: FormGroup;
  respuesta = new  RespuestaModel();
  respuesta2 = new  RespuestaModel();
  respuesta3 = new  RespuestaModel();

  descripcion: Array<string> = [];

  constructor() {
    this.setForma();
  }

  ngOnInit() {
  }

  public setForma() {

    this.forma = new FormGroup({

      respuestas: new FormArray([
        new FormControl('', Validators.required )
      ])
      
    }),

    this.forma2 = new FormGroup({

      respuestas2: new FormArray([
        new FormControl('', Validators.required )
      ])
      
    }),

    this.forma3 = new FormGroup({

      respuestas3: new FormArray([
        new FormControl('', Validators.required )
      ])
      
    });
  }

  agregarRespuesta(){
    (<FormArray>this.forma.controls['respuestas']).push(
      new FormControl( '', Validators.required )
    )
  }

  agregarRespuesta2(){
    (<FormArray>this.forma2.controls['respuestas2']).push(
      new FormControl( '', Validators.required )
    )
  }


  agregarRespuesta3(){
    (<FormArray>this.forma3.controls['respuestas3']).push(
      new FormControl( '', Validators.required )
    )
  }


  guardarCambios() {

    this.descripcion = this.forma.value['respuestas'];

    this.respuesta.id = 1;
    this.respuesta.descripcion = this.forma.value['respuestas'];
    this.respuesta.idpregunta = 3;

    // console.log(this.forma.value['respuestas']);
    // console.log(this.descripcion);
    console.log(this.respuesta);


  }

}
