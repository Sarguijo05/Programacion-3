import { Component, OnInit } from '@angular/core';
import { formapago } from '../../interfaces/user';
import { DataService } from '../../services/data.service';
import { ViewChild, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-formapago',
  templateUrl: './formapago.component.html',
  styleUrls: ['./formapago.component.css'],
})
export class FormapagoComponent implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;
  filterPost = '';
  name = 'FormaPago.xlsx';
  TUser: any = [];
  user: formapago = {
    idfpago: null,
    idempresa: null,
    formapago: null,
    estado: 'Activo',
  };
  Empresalist: any;
  constructor(private Data: DataService) {}

  ngOnInit(): void {
    this.getDropListEmpresa();
    this.getUser();
  }
  getDropListEmpresa() {
    this.Data.getDropListEmpresa().subscribe((data: any) => {
      this.Empresalist = data;
    });
  }
  getUser() {
    this.Data.getAll('/formapago').subscribe(
      (res) => {
        this.TUser = res;
      },
      (err) => console.error(err)
    );
  }
  AgregarValor() {
    delete this.user.idfpago;
    this.Data.save(this.user, '/formapago').subscribe(
      (res) => {
        this.getUser();
      },
      (err) => {
        console.error(err);
      }
    );
  }

  EliminarData(id: number) {
    this.Data.delete(id, '/formapago').subscribe(
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
      PDF.save('Formapago.pdf');
    });
  }

}
