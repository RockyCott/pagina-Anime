import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuracion } from 'src/app/models/configuracion.mdel';
import { ConfiguracionService } from 'src/app/services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.scss'],
})
export class ConfiguracionComponent implements OnInit {
  permitirRegistro = false;

  constructor(
    private router: Router,
    private configuracionService: ConfiguracionService
  ) {}

  ngOnInit() {
    this.configuracionService
      .getConfiguracion()
      .subscribe((configuracion: Configuracion | undefined) => {
        this.permitirRegistro = configuracion?.permitirRegistro!;
      });
  }

  guardar() {
    let configuracion = {permitirRegistro: this.permitirRegistro};
    this.configuracionService.modificarConfiguracion(configuracion);
  }
}
