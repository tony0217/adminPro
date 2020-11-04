import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/service.index'; // servicio del service.index

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  menuList: any = [{}];

  constructor( public _sidebar: SidebarService) {

    // console.log(_sidebar.menu);

   }

  ngOnInit() {
    this.menuList = this._sidebar['menu']
    console.log(this.menuList);

  }

}
