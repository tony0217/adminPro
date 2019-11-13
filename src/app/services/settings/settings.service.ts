import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {


// url del tema y valor
  setting : Setting = {

    themeUrl : 'assets/css/colors/default.css',
    theme :'default'

  };

  // manupular el dom del html
  constructor(@Inject(DOCUMENT) private document) {
    //ccargar tema
    this.loadSetting();
   }

  saveSetting() {
    //console.log('guardado en el local storage');
                                     // de json a string
    localStorage.setItem('setting', JSON.stringify(this.setting))
  }

  loadSetting(){

    // si existe valores en el localstore
    if (localStorage.getItem('setting')) {
      this.setting =  JSON.parse( localStorage.getItem('setting'))
     // console.log(' cargando del localStore');

      this.applyTheme(this.setting.theme);
    }else{

      //console.log('usando valores por defecto');
    }
  }

  applyTheme(theme: string){

        // url donde se cambia el tema
        let url = `assets/css/colors/${theme}.css`
        // traer el id del tema y cambiar url donde dice href en el html
        this.document.getElementById('theme').setAttribute('href', url);
        // guardar el valor del tema
        this.setting.theme = theme;
        // guardar el valor del url del tema
        this.setting.themeUrl = url;
        // llamar al metodo guarda ajustes
        this.saveSetting();
  }








}

// restringir el tip de informacion

interface Setting {

  themeUrl: string;
  theme: string;


}
