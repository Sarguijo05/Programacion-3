import { Component,OnInit } from '@angular/core';
import { areas_trabajo } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-trabado-edit',
  templateUrl: './area-trabado-edit.component.html',
  styleUrls: ['./area-trabado-edit.component.css'],
})
export class AreaTrabadoEditComponent implements OnInit{
  valorInput: number | undefined;
  TUser: any = [];
  user: areas_trabajo = {
    idarea: null,
    idempresa: null,
    idsuc: null,
    area: null,
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
      this.Data.getOne(params['id'], '/areastrabajo').subscribe(
        (res) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.idarea!, this.user, '/areastrabajo').subscribe(
      (res) => {
        this.router.navigate(['/areastrabajo']);
      },
      (err) => console.error(err)
    );
  }
}
