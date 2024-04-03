import { Component, OnInit } from '@angular/core';
import { empresa } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { DateUtilService } from 'src/app/services/date-util.service';
import { ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css'],
})
export class EmpresaComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  name = 'Empresas.xlsx';
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
    public dateUtilService: DateUtilService
  ) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.Data.getAll('/empresa').subscribe(
      (res) => {
        this.TUser = res;
      },
      (err) => console.error(err)
    );
  }

  AgregarValor() {
    delete this.user.idempresa;
    this.Data.save(this.user, '/empresa').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/empresa').subscribe(
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
      PDF.save('empresas.pdf');
    });
  }
}
