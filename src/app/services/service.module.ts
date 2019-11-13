import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// importar todos los servicios del service.index
import { SettingsService,SidebarService,SharedService } from './service.index';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SettingsService,SidebarService,SharedService]
})
export class ServiceModule { }
