import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from "@angular/router";
import { CapacitacionService } from 'src/app/services/capacitacion.service';

@Component({
  selector: 'app-temas',
  templateUrl: './temas.component.html'
})
export class TemasComponent implements OnInit {
  capacitacion: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private capacitacionService: CapacitacionService
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.capacitacion = this.capacitacionService.getCapacitacion(params["id"]);
      // console.log(this.heroe);
    });
  }

  ngOnInit() {
  }

}
