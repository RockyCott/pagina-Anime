import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PersonajeService } from 'src/app/services/personaje.service';
import { MatDialog } from '@angular/material/dialog';
import { CreatePersonajesComponent } from '../create-personajes/create-personajes.component';
import { DeletePersonajeComponent } from '../delete-personaje/delete-personaje.component';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html',
  styleUrls: ['./list-personajes.component.scss'],
})
export class ListPersonajesComponent implements OnInit {
  personajes: any[] = [];
  constructor(
    private personajeService: PersonajeService,
    private toastr: ToastrService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getPersonajes();
  }

  getPersonajes() {
    this.personajeService.getPersonajes().subscribe((data) => {
      this.personajes = [];
      data.forEach((element: any) => {
        this.personajes.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data(),
        });
      });
    });
  }

  editarPersonaje(personaje: any) {
    this.dialog.open(CreatePersonajesComponent, {
      width: '600px',
      data: {
        titulo: 'Editar Personaje',
        boton: 'Actualizar',
        insertMode: false,
        editMode: true,
        personaje: personaje,
      },
    });
  }

  eliminarPersonaje(personaje: any) {
    this.dialog.open(DeletePersonajeComponent, {
      data: {
        personaje: personaje
      },
    });
  }

  openAgregar() {
    this.dialog.open(CreatePersonajesComponent, {
      width: '600px',
      data: {
        titulo: 'Añadir Personaje',
        boton: 'Agregar',
        insertMode: true,
      },
    });
  }
}
