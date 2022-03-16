import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DialogData } from 'src/app/models/personaje.model';
import { PersonajeService } from 'src/app/services/personaje.service';

@Component({
  selector: 'app-delete-personaje',
  templateUrl: './delete-personaje.component.html',
  styleUrls: ['./delete-personaje.component.scss'],
})
export class DeletePersonajeComponent implements OnInit {
  loading = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private personajeService: PersonajeService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<DeletePersonajeComponent>,
  ) {}

  ngOnInit(): void {
  }

  eliminarPersonaje() {
    this.loading = true;
    this.personajeService
      .eliminarPersonaje(this.data.personaje.id)
      .then(() => {
        this.toastr.success(
          'El personaje fue eliminado con exito',
          'Registro eliminado',
          { positionClass: 'toast-bottom-right' }
        );
        this.loading = false;
        this.dialogRef.close();
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
