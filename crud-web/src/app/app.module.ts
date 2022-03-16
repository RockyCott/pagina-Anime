import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// modulos
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
// componentes
import { AppComponent } from './app.component';
import { ListPersonajesComponent } from './components/list-personajes/list-personajes.component';
import { CreatePersonajesComponent } from './components/create-personajes/create-personajes.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { RegistroComponent } from './components/registro/registro.component';
import { ConfiguracionComponent } from './components/configuracion/configuracion.component';
import { PiePaginaComponent } from './components/pie-pagina/pie-pagina.component';
import { DeletePersonajeComponent } from './components/delete-personaje/delete-personaje.component';
import { LoginAuthComponent } from './components/login-auth/login-auth.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { LoginService } from './services/login.service';
import { AuthGuard } from './guards/auth.guard';
import { ConfiguracionService } from './services/configuracion.service';
import { ConfiguracionGuard } from './guards/configuracion.guard';

@NgModule({
  declarations: [
    AppComponent,
    ListPersonajesComponent,
    CreatePersonajesComponent,
    NavbarComponent,
    RegistroComponent,
    ConfiguracionComponent,
    PiePaginaComponent,
    DeletePersonajeComponent,
    LoginAuthComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatCardModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
  ],
  providers: [LoginService, AuthGuard, ConfiguracionService, ConfiguracionGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
