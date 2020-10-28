import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';
import { reject } from 'q';
import { error } from 'util';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {


    // llamar a la promesa
    this.countThree().then(
    (message) => console.log('termino', message)
    // tslint:disable-next-line:no-shadowed-variable
    ).catch(error => console.error(error));

  }

  ngOnInit() {
  }

  countThree(): Promise<boolean> {
      // declarar promise

      // tslint:disable-next-line:no-shadowed-variable
      return new Promise((resolve, reject) => {
         let cont = 0;
        // disparar por cada intervalo de tiempo
         const interval = setInterval(() => {
          cont += 1;
          console.log('contador :', cont);
          if (cont === 3) {
            // resolver una promesa
            resolve(true);
            // reject('Error en la promesa');
            // detener un intervalo
            clearInterval(interval);
          }
        }, 1000);

      });

  }

}
