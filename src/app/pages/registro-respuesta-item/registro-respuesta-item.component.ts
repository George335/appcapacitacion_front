import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RespuestaModel } from '../../models/respuesta.models';
import { PreguntaModel } from '../../models/pregunta.models';
import { CapacitacionModel } from '../../models/capacitacion.models';
import { ItemModel } from '../../models/item.models';

@Component({
  selector: 'app-registro-respuesta-item',
  templateUrl: './registro-respuesta-item.component.html'
})
export class RegistroRespuestaItemComponent implements OnInit {

  forma: FormGroup;

  capacitacion = new CapacitacionModel();
  item = new ItemModel();
  pregunta = new  PreguntaModel();

  preguntas: Array<PreguntaModel> = [];
  respuestas: Array<RespuestaModel> = [];

  private listaPreguntas: PreguntaModel[] = [
    {
      id: 1,
      pregunta1: "123456",
      pregunta2: "vee",
      pregunta3:"eff",
      iditem: 3
    }
  ];
 
  constructor() {
    this.setForma(this.capacitacion, this.item, this.pregunta);
  }

  ngOnInit() {
  }

  public setForma( capacitacion: CapacitacionModel, item: ItemModel, pregunta: PreguntaModel ) {

    this.forma = new FormGroup({

      // idIso: new FormControl(capacitacion.id, Validators.required),
      // idItem: new FormControl(item.id, Validators.required)
      // idPrg = new FormControl(pregunta.id, Validators.required),

      idIso: new FormControl(1),
      idItem: new FormControl(3), 
      'respuestas': new FormArray([
        new FormControl('', Validators.required )
      ])
    });
  }

  agregarRespuesta(){
    (<FormArray>this.forma.controls['respuestas']).push(
      new FormControl( '', Validators.required )
    )
  }


  public setItem() {
    this.item.id = this.forma.controls["idItem"].value;
    this.pregunta.id = this.forma.controls["idPrg"].value;

    console.log(this.item);
    console.log(this.pregunta);


  }

  

  // agregarRespuesta3(){
  //   (<FormArray>this.forma3.controls['respuestas3']).push(
  //     new FormControl( '', Validators.required )
  //   )
  // }


  guardar() {

    // this.descripcion = this.forma.value['respuestas'];

    // this.respuesta.id = 1;
    // this.respuesta.descripcion = this.forma.value['respuestas'];
    // this.respuesta.idpregunta = 3;

    // console.log(this.forma.value['respuestas']);
    // console.log(this.descripcion);

    // console.log(this.respuesta);


  }

}
