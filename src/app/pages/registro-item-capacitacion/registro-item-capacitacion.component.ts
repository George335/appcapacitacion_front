import { Component, OnInit } from "@angular/core";
import {
  NgForm,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { ItemModel } from "src/app/models/item.models";
import { PreguntaModel } from '../../models/pregunta.models';
import { Router } from '@angular/router';

@Component({
  selector: "app-registro-item-capacitacion",
  templateUrl: "./registro-item-capacitacion.component.html"
})
export class RegistroItemCapacitacionComponent implements OnInit {
  forma: FormGroup;
  forma2: FormGroup;
  item = new ItemModel();
  pregunta = new PreguntaModel();

  constructor( private router: Router ) {
    this.setForma(this.item, this.pregunta);
  }

  ngOnInit() {}

  guardar() {
    //Obtener los items
    this.setItem();
  }

  public setForma(item: ItemModel, pregunta: PreguntaModel) {
    this.forma2 = new FormGroup({
      nombre: new FormControl(item.nombre, Validators.required)
    });

    this.forma = new FormGroup({
      pregunta1: new FormControl(pregunta.pregunta1, Validators.required),
      pregunta2: new FormControl(pregunta.pregunta2, Validators.required),
      pregunta3: new FormControl(pregunta.pregunta3, Validators.required)
    });
  }

  public setItem() {
    this.item.nombre = this.forma2.controls["nombre"].value;
    this.pregunta.pregunta1 = this.forma.controls["pregunta1"].value;
    this.pregunta.pregunta2 = this.forma.controls["pregunta2"].value;
    this.pregunta.pregunta3 = this.forma.controls["pregunta3"].value;

    // console.log(this.item);
    // console.log(this.pregunta);

    this.router.navigate( ['/registroRespuestaItem'] );

  }

  // convenience getter for easy access to form fields
  get f1() { return this.forma.controls; }
  
}
