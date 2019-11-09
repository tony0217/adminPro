import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({

    declarations:[
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent
      

    ],
    // exportar los componentes a otros
    exports: [

        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SidebarComponent
      
    ]
 
})

export class SharedModule { }