import { Component, OnInit } from '@angular/core';
// importar funciones que no sean de angular eje:jquery
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html'
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

      // funcion traida de custom.js para inicializar las funcionalidades del sidebar
      init_plugins();
  }

}
