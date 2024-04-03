import { Component, OnInit } from '@angular/core';
import { empresa } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empresa-edit',
  templateUrl: './empresa-edit.component.html',
  styleUrls: ['./empresa-edit.component.css'],
})
export class EmpresaEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: empresa = {
    idempresa: null,
    nombre: null,
    direccion: null,
    rtn: null,
    telefono: null,
    correo: null,
    contacto: null,
    fecha_creacion: null,
    estado: 'Activo',
  };
  constructor(
    private Data: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;

    if (params['id']) {
      this.Data.getOne(params['id'], '/empresa').subscribe(
        (res) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.idempresa!, this.user, '/empresa').subscribe(
      (res) => {
        this.router.navigate(['/empresa']);
      },
      (err) => console.error(err)
    );
  }
}
