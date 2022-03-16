import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-create-personajes',
  templateUrl: './create-personajes.component.html',
  styleUrls: ['./create-personajes.component.scss'],
})
export class CreatePersonajesComponent implements OnInit {
  createPersonaje: FormGroup;
  submitted = false;
  loading = false;
  titulo = '';
  botontitle = '';
  formInsertMode: boolean;
  formEditMode: boolean;

  constructor(
    private personajeService: PersonajeService,
    private _snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<CreatePersonajesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formInsertMode = false;
    this.formEditMode = false;
    this.createPersonaje = new FormGroup({
      id: new FormControl(''),
      nombre: new FormControl('', [Validators.required]),
      anime: new FormControl('', [Validators.required]),
      documento: new FormControl('', [Validators.required]),
      salario: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.titulo = this.data?.titulo;
    this.botontitle = this.data?.boton;
    this.formInsertMode = this.data?.insertMode;
    this.formEditMode = this.data?.editMode;
    if (this.formEditMode) {
      this.createPersonaje.patchValue(this.data?.personaje);
    }
  }

  agregarEditarPersonaje() {
    this.submitted = true;
    if (this.createPersonaje.invalid) {
      return;
    }
    if (this.formInsertMode) {
      this.agregarPersonaje();
      this.dialogRef.close();
    } else {
      this.editarPersonaje(this.data?.personaje.id);
    }
  }

  agregarPersonaje() {
    const personaje: any = {
      nombre: this.createPersonaje.value.nombre,
      anime: this.createPersonaje.value.anime,
      documento: this.createPersonaje.value.documento,
      salario: this.createPersonaje.value.salario,
      fechaCreacion: new Date(),
      fechaActualizacion: new Date(),
    };
    this.loading = true;
    this.personajeService
      .agregarPersonaje(personaje)
      .then(() => {
        this._snackBar.open(
          'El personaje fue registrado con exito!',
          'Aceptar'
        );
        this.loading = false;
      })
      .catch((error) => {
        this.loading = false;
      });
  }

  editarPersonaje(id: string) {
    const personaje: any = {
      nombre: this.createPersonaje.value.nombre,
      anime: this.createPersonaje.value.anime,
      documento: this.createPersonaje.value.documento,
      salario: this.createPersonaje.value.salario,
      fechaActualizacion: new Date(),
    };
    this.loading = true;
    this.personajeService.actualizarPersonaje(id, personaje).then(() => {
      this.loading = false;
      this._snackBar.open('El personaje fue modificado con exito', 'Aceptar');
      this.dialogRef.close();
    });
  }

  esEditar() {
    this.titulo = 'Añadir Personaje';
    this.botontitle = 'Añadir';
    if (this.data?.personaje.id !== null) {
      this.titulo = 'Editar Personaje';
      this.botontitle = 'Guardar';
      this.loading = true;
      this.personajeService.actualizarPersonaje(
        this.data.personaje.id,
        this.data.personaje
      );
    }
  }
}
