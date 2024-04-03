import { Component, OnInit } from '@angular/core';
import { producto } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { DateUtilService } from '../../services/date-util.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  name = 'Producto.xlsx';
  TUser: any = [];
  user: producto = {
    num_prod: null,
    idempresa: null,
    idsuc: null,
    idtpprod: null,
    descripcion: 'general',
    presentacion: null,
    marca: null,
    valor: null,
    precioventa: null,
    existencia: null,
    fecha_ingreso: null,
    fecha_actualiza: null,
    estado: 'activo',
  };
  Empresalist: any;
  Sucursaleslist: any;
  TipoProductolist: any;
  constructor(
    private Data: DataService,
    public dateUtilService: DateUtilService
  ) {}

  ngOnInit(): void {
    this.getDropListEmpresa();
    this.getDropListSucursales();
    this.getDropListTipoProducto();
    this.getUser();
  }

  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data: any) => {
      this.Empresalist = data;
    });
  }

  getDropListSucursales() {
    this.Data.getDropListSucursales().subscribe((data: any) => {
      this.Sucursaleslist = data;
    });
  }

  getDropListTipoProducto() {
    this.Data.getDropListTipoProducto().subscribe((data: any) => {
      this.TipoProductolist = data;
    });
  }

  getUser() {
    this.Data.getAll('/producto').subscribe(
      (res) => {
        this.TUser = res;
      },
      (err) => console.error(err)
    );
  }

  AgregarValor() {
    delete this.user.num_prod;
    this.Data.save(this.user, '/producto').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/producto').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => console.error(err)
    );
  }

  exportToExcel(): void {
    let element = document.getElementById('tabla');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');
    XLSX.writeFile(book, this.name);
  }

  public openPDF(): void {
    let DATA: any = document.getElementById('tabla');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('Productos.pdf');
    });
  }

}
