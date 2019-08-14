import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { UsuarioModel } from 'src/app/models/usuario.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  private usuario: UsuarioModel;
  usuarios:any[] = []
  termino:string;

  constructor( private router: Router, 
                private _loginService: LoginService, 
                private _usuarioService: UsuarioService ) { }

  ngOnInit() {
  }

  loguearse( dni:string, pass:string ){

    this.usuario = this._usuarioService.getUsuario(dni, pass);

    if(!this.usuario){
      console.log(" Credenciales no existe.");

    } else {
      if( this.usuario.idrol == 0 ){
        this.router.navigate([ '/inicioPortalAdministrador' ]);
      } else if( this.usuario.idrol == 1 ){
        this.router.navigate([ '/inicio' ]);
      }
      
      
    }

  }

}
