import { Component, OnInit } from '@angular/core';
import { formapago } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formapago-edit',
  templateUrl: './formapago-edit.component.html',
  styleUrls: ['./formapago-edit.component.css']
})
export class FormapagoEditComponent implements OnInit {
  valorInput: number | undefined;
  TUser: any = [];
  user: formapago = {
    idfpago: null,
    idempresa: null,
    formapago: null,
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
      this.Data.getOne(params['id'], '/formapago').subscribe(
        (res) => {
          this.user = res;
        },
        (err) => console.log(err)
      );
    }
  }
  updateUser() {
    this.Data.update(this.user.idfpago!, this.user, '/formapago').subscribe(
      (res) => {
        this.router.navigate(['/formapago']);
      },
      (err) => console.error(err)
    );
  }
}
