import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PizzaPartyComponent } from '../utils/pizza-party/pizza-party.component';



@NgModule({
  declarations: [
    UsuariosComponent, 
    DashboardComponent],
  imports: [
    CommonModule,
    NgxChartsModule,
    PizzaPartyComponent
  ]
})
export class PagesModule { }
