import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// importar funciones que no sean de angular eje:jquery
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit() {
    // funcion traida de custom.js para inicializar las funcionalidades del sidebar
    init_plugins();
  }

  login(){

    this.router.navigate(['/dashboard']);

    console.log('logeando');

  }

}
