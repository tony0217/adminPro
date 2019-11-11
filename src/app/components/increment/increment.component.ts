import { Component, OnInit, Input, Output, ViewChild, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',

})
export class IncrementComponent implements OnInit {



  // recibe un parametro de html
  @ViewChild('txtProgress', { static: true }) txtProgress: ElementRef;



  // valor del progress y leyenda
  // son variables que viene de afuera
  @Input() progress: number = 50;
  @Input() legend: string;



  // funcion output para cambiar el valor tipo number
  @Output() changeValueOut: EventEmitter<number> = new EventEmitter();


  constructor() {
  }

  ngOnInit() {

    console.log(this.progress);
    console.log(this.legend);
  }

  onChange(newValue: number) {

    console.log(this.txtProgress);

    // tomar el valor de un input y limitarlo
    // let elemHTML = document.getElementsByName('progress')[0];


    if (newValue >= 100) {

      this.progress = 100;

    } else if (newValue <= 0) {

      this.progress = 0;
    } else {

      this.progress = newValue;
    }
    // toma el valor dependiendo de la condicion si es ej: 200 = 100
    // elemHTML['value'] = this.progress;

    // toma el valor dependiendo de la condicion si es ej: 200 = 100

    this.txtProgress.nativeElement['value'] = this.progress;


    this.changeValueOut.emit(this.progress)


  }

  //cambiar el valor del progress
  changeValue(value: number) {
    // si el valor es mayor a 100 regresa al inicio ||
    if (this.progress >= 100) {
      this.progress = 100;
      this.txtProgress.nativeElement['value'] = this.progress;
      if (value == -5){
        this.progress = this.progress + value
        this.changeValueOut.emit(this.progress)
      }



      // si el valor es menor o igual a 0 regresa al inicio
    } else if (this.progress <= 0) {
      this.progress = 0 ;
      this.txtProgress.nativeElement['value'] = this.progress;
      if (value == 5){
        this.progress = this.progress + value
        this.changeValueOut.emit(this.progress)
      }

    } else {
      this.progress = this.progress + value

      this.txtProgress.nativeElement['value'] = this.progress;

      this.txtProgress.nativeElement.focus();

      // llamar la funcion outout para mostrar el cambio en la barra
      this.changeValueOut.emit(this.progress)

    }



  }

}
