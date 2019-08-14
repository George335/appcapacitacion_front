import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html'
})
export class HeaderAdminComponent implements OnInit {
  
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  irCapacitaciones( id: number ) {

    if(id==1){
      this.router.navigate([ '/inicioPortalAdministrador' ]);
    }

  }

}
