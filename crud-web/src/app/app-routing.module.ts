import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { CreatePersonajesComponent } from './components/create-personajes/create-personajes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ListPersonajesComponent } from './components/list-personajes/list-personajes.component';
import { LoginAuthComponent } from './components/login-auth/login-auth.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracionGuard } from './guards/configuracion.guard';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginAuthComponent},
  { path: 'registrarse', component: RegistroComponent, canActivate: [ConfiguracionGuard]},
  { path: 'configuracion', component: ConfiguracionComponent, canActivate: [AuthGuard]},
  { path: 'list-personajes', component: ListPersonajesComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'list-personajes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
