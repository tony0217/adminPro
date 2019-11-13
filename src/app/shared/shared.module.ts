
import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common'; // ngfor, ngIF
// components
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({

    declarations:[
        SidebarComponent,
        NopagefoundComponent,
        HeaderComponent,
        BreadcrumbsComponent,



    ],

    imports:[
        RouterModule,
        CommonModule
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
