import { NgModule } from "@angular/core";

import { FormsModule } from '@angular/forms';


// componentes pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { IncrementComponent } from '../components/increment/increment.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { GraphicDonutComponent } from '../components/graphic-donut/graphic-donut.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';

// modulo shared
import { SharedModule } from '../shared/shared.module';



// rutas
import { PagesRoutesModule } from './pages.routes';

// modulos externos

// graficas
import { ChartsModule } from 'ng2-charts';





@NgModule({

    declarations:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    IncrementComponent,
    GraphicDonutComponent,
    AccountSettingComponent

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
        PagesRoutesModule,
        FormsModule,
        ChartsModule

    ]
})
// exportar al appModule
export class PagesModule { }
