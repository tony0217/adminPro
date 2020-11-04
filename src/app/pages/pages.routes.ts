import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { RxjsComponent } from './rxjs/rxjs.component';





const pagesRoutes: Routes = [
  // ruta principal
  {path:'',
  component: PagesComponent,
  // hijos del pages
  children:[

    {path:'dashboard', component: DashboardComponent},
    {path:'progress', component: ProgressComponent},
    {path:'grafica1', component: Graficas1Component},
    {path:'rxjs', component: RxjsComponent},
    {path:'account-settings', component: AccountSettingComponent},

    {path:'',redirectTo:'/dashboard' , pathMatch: 'full'},
    {path:'**', component: NopagefoundComponent},



  ]

}

];

@NgModule({
    //forchild: rutas hijas

  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule]
})
// exportar al modulo pages
export class PagesRoutesModule { }


