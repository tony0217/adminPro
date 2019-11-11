import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-graphic-donut',
  templateUrl: './graphic-donut.component.html',
  styles: []
})
export class GraphicDonutComponent implements OnInit {


  // datos recibidos de graficas1
  @Input() public data: MultiDataSet = [];
  @Input() public labels: Label[] = [];
  @Input() public type: ChartType ;
  @Input() legend: string;

// colors
  // public chartColors: Array<any> = [
  //   { // first color
  //     backgroundColor: '#rrr',
  //     borderColor: 'blue',
  //     pointBackgroundColor: 'red',
  //     pointBorderColor: 'red',
  //     pointHoverBackgroundColor: 'red',
  //     pointHoverBorderColor: 'red'
  //   },
  //   { // second color
  //     backgroundColor: 'red',
  //     borderColor: 'red',
  //     pointBackgroundColor: 'red',
  //     pointBorderColor: 'red',
  //     pointHoverBackgroundColor: 'red',
  //     pointHoverBorderColor: 'red'
  //   },

  //   { // second color
  //     backgroundColor: 'rgba(225,10,24,0.2)',
  //     borderColor: 'rgba(225,10,24,0.2)',
  //     pointBackgroundColor: 'rgba(225,10,24,0.2)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(225,10,24,0.2)'
  //   },



  // ];


  constructor() {
  }


  ngOnInit() {

    console.log('data',this.data);
    console.log('labels',this.labels);
    console.log('type',this.type);

  }





}
