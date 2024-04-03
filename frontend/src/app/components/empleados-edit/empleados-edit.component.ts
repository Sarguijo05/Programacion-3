import { Component } from '@angular/core';
import { empleados } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleados-edit',
  templateUrl: './empleados-edit.component.html',
  styleUrls: ['./empleados-edit.component.css'],
})
export class EmpleadosEditComponent {
  valorInput: number | undefined;
  TUser: any = [];
  user: empleados = {
    idemp: null,
    idempresa: null,
    idsuc: null,
    idarea: null,
    identidad: null,
    fecha_nac: null,
    nombres: null,
    apellidos: null,
    genero: null,
    estado_civil: null,
    direccion: null,
    fecha_creacion: null,
    estado: 'activo',
  };

  constructor(
    private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/empleados').subscribe(
        (res) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.idemp!, this.user, '/empleados').subscribe(
      (res) => {
        this.router.navigate(['/empleados']);
      },
      (err) => console.error(err)
    );
  }
}
