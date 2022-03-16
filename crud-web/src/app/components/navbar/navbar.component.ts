import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { ConfiguracionService } from 'src/app/services/configuracion.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  @Output() sideEvent = new EventEmitter<boolean>();
  isLoggedIn: boolean = false;
  loggedInUser?: string = '';
  permitirRegistro?: boolean;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private configuracionService: ConfiguracionService
  ) {}

  ngOnInit(){
    this.loginService.getAuth().subscribe( auth => {
      if(auth){
        this.isLoggedIn = true;
        this.loggedInUser = auth.email!;
      } else {
        this.isLoggedIn = false;
      }
    });
    this.configuracionService.getConfiguracion()
    .subscribe(configuracion => {
      this.permitirRegistro = configuracion?.permitirRegistro;
    });
  }

  logOut(){
    this.loginService.logOut();
    this.isLoggedIn = false;
    this.router.navigate(["/login"]);
  }
}
