import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu:[
        {title: 'Dashboard', url: '/dashboard'},
        {title: 'Progress', url: '/progress'},
        {title: 'Graficas', url: '/grafica1'},
        {title: 'Rxjs', url: '/rxjs'},
      ]
    }



  ];

  constructor() { }
}
