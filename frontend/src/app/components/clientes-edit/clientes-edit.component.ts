import { Component,OnInit } from '@angular/core';
import { clientes } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css'],
})
export class ClientesEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: clientes = {
    num_clie: null,
    idempresa: null,
    idsuc: null,
    identidad: null,
    rtn: null,
    fecha_nac: null,
    nombre: null,
    telefono: null,
    direccion: null,
    correo: null,
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
      this.Data.getOne(params['id'], '/clientes').subscribe(
        (res) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.num_clie!, this.user, '/clientes').subscribe(
      (res) => {
        this.router.navigate(['/clientes']);
      },
      (err) => console.error(err)
    );
  }
}
