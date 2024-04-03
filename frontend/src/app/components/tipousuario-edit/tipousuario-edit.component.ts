import { Component, OnInit } from '@angular/core';
import { tipousuario } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipousuario-edit',
  templateUrl: './tipousuario-edit.component.html',
  styleUrls: ['./tipousuario-edit.component.css'],
})
export class TipousuarioEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: tipousuario = {
    idtpusuario: null,
    idempresa: null,
    tipo: null,
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
      this.Data.getOne(params['id'], '/tipousuario').subscribe(
        (res) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.idtpusuario!, this.user, '/tipousuario').subscribe(
      (res) => {
        this.router.navigate(['/tipousuario']);
      },
      (err) => console.error(err)
    );
  }
}
