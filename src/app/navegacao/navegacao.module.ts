import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UsuariosComponent } from '../pages/usuarios/usuarios.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent },
  {path: 'usuarios', component: UsuariosComponent }
];

@NgModule({
  declarations: [MenuComponent, HeaderComponent, FooterComponent, HomeComponent],
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class NavegacaoModule { }
