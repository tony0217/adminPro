import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  // valor del progress
  progress1: number = 20;
  // valor del progress 2
  progress2: number = 50;
  constructor() { }
  ngOnInit() {
  }

  // funcion actualizar  la barra de progress
  // updateValue(event: number){

  //   console.log('evento',event);
  //   this.progress1 = event
  // }



}
