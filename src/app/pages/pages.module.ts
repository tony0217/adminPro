import { NgModule } from "@angular/core";



// componentes pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

// modulo shared
import { SharedModule } from '../shared/shared.module';



// rutas
import { PagesRoutesModule } from './pages.routes';



@NgModule({

    declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
 
    ],
    // exportar los componentes a otros
    exports: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component
    ],
    imports:[
        SharedModule,
        PagesRoutesModule
    ]
})
// exportar al appModule
export class PagesModule { }