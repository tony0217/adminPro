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
  public chartColors: Array<any> = [
    // { // first color
    //   backgroundColor: '#rrr',
    //   borderColor: 'blue',
    //   pointBackgroundColor: 'red',
    //   pointBorderColor: 'red',
    //   pointHoverBackgroundColor: 'red',
    //   pointHoverBorderColor: 'red'
    // },
    // { // second color
    //   backgroundColor: 'red',
    //   borderColor: 'red',
    //   pointBackgroundColor: 'red',
    //   pointBorderColor: 'red',
    //   pointHoverBackgroundColor: 'red',
    //   pointHoverBorderColor: 'red'
    // },

    { // second color
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      pointBackgroundColor: 'rgba(225,10,24,0.2)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(225,10,24,0.2)'
    },



  ];


  constructor() {
  }


  ngOnInit() {

    console.log('data',this.data);
    console.log('labels',this.labels);
    console.log('type',this.type);

  }





}
