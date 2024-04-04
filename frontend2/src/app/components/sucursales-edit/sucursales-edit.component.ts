import { Component, OnInit } from '@angular/core';
import { sucursales } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sucursales-edit',
  templateUrl: './sucursales-edit.component.html',
  styleUrls: ['./sucursales-edit.component.css'],
})
export class SucursalesEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: sucursales = {
    idsuc: null,
    idempresa: null,
    sucursal: null,
    dirsuc: null,
    telefono: null,
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
      this.Data.getOne(params['id'], '/sucursales').subscribe(
        (res) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.idsuc!, this.user, '/sucursales').subscribe(
      (res) => {
        this.router.navigate(['/sucursales']);
      },
      (err) => console.error(err)
    );
  }
}
