import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { throwError, Observable, retry, catchError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient, private router: Router) {}

  getDropListEmpresa(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/empresa');
  }

  getDropListSucursales(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/sucursales');
  }

  getDropListTipoUsuario(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/tipousuario');
  }

  getDropListTipoProducto(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/tipoproducto');
  }

  getDropListArea(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/areastrabajo');
  }

  getDropListEmpleado(): Observable<any[]> {
    return this.http.get<any>(this.API_URI + '/empleados');
  }

  getAll(url: string) {
    return this.http.get(`${this.API_URI}` + url);
  }

  getOne(id: string, url: string) {
    return this.http.get(`${this.API_URI}` + url + `/${id}`);
  }
  delete(id: number, url: string) {
    return this.http.delete(`${this.API_URI}` + url + `/${id}`);
  }
  update(id: string | number, updated: User, url: string): Observable<User> {
    return this.http.post(`${this.API_URI}` + url + `/${id}`, updated);
  }
  save(Usuario: User, url: string) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .post(`${this.API_URI}` + url, JSON.stringify(Usuario), {
        headers: headers,
      })
      .pipe(retry(1), catchError(this.errorHandl));
  }
  guardar(Usuario: User, url: string) {
    let headers = new HttpHeaders();
    headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http
      .post(`${this.API_URI}` + url, JSON.stringify(Usuario), {
        headers: headers,
      })
      .pipe(retry(1), catchError(this.errorHandl));
  }
  errorHandl(error: { error: { message: string }; status: any; message: any }) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
