import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from './../../services/service.index';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {

  //referenia al dom
  constructor(@Inject(DOCUMENT) private document,
               public _setting: SettingsService ) { }

  ngOnInit() {

    //llamar la funcion que coloca el check en el color
    this.putCheck();
  }

  // funcion para cambiar de color el tema en index.html
  changeColor(theme :string, link : any){
    console.log(theme, link);

    // llamar la funcion para cambiar el color
    this._setting.applyTheme(theme);

     // llamar la funcion para aplicar el check
     this.applyCheck(link);




  }

  // aplicar la seleccion del color
  applyCheck (link : any){
    // tener todos los temas apartir de una clase en comun
    let selectors = this.document.getElementsByClassName('selector');

    //recorrer todos los temas
    for (let ref of selectors){
      // remover la clase working de todos los seletores
      ref.classList.remove('working');
    }
    // añadir la clase woring al item seleccionado
    link.classList.add('working');

  }


  putCheck(){
     // tener todos los temas apartir de una clase en comun
    let selectors = this.document.getElementsByClassName('selector');

    // tema que esta en el localstorage
    let theme = this._setting.setting.theme;

    for (let ref of selectors){

      if (ref.getAttribute('data-theme')== theme) {
          ref.classList.add('working');
          break;

      }


    }


  }

}
