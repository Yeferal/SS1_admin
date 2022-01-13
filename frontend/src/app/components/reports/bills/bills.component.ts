import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bill } from 'src/app/models/bill';
import { ReportsService } from 'src/app/services/reports.service';

import { Cell, Columns, PdfMakeWrapper, Stack, Table, Txt } from 'pdfmake-wrapper';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {

  formDate: FormGroup = new FormGroup({
    fecha: new FormControl(null,null)
  });
  
  // pdfMake
  listBills: Bill [] = [];
  total: any = 0.00;

  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.searchData();
  }
  
  searchData(){
    let date: Date = new Date();
    let data: any = date.toISOString();
    
    if (this.formDate.get('fecha')?.value != null) {
      data = this.formDate.get('fecha')?.value;
    }
    console.log(data);
    this.reportService.gerReportBills(data).subscribe(
      res => {
        console.log(res);
        this.listBills = res;
        this.total = 0.00;
        this.listBills.forEach(bills => {
          this.total = this.total + Number(bills.total);
        });
      },
      error =>{
        console.log(error);
      }
    );
    
  }

  generatePDF(){
    const pdf = new PdfMakeWrapper();

    pdf.header('Report Bills');
    pdf.pageMargins([ 40, 60, 40, 60 ]);

    pdf.add(
      new Columns([ '#', 'No. Factura', 'Cuenta', 'Usuario', 'Fecha', 'Total' ]).end
    );
    // pdf.add(
    //   new Stack([ 'Hello', 'world' ]).end
    // );

    // let tbody: any = [];
    // this.listBills.forEach(Bill => {
    //   tbody.push([ 'column 1', 'column 2']);
    // });

    pdf.add(
      new Table([
        [ 'column 1', 'column 2'],
        [ 'column 1', 'column 2'],
        [ 'column 1', 'column 2']
    ]).widths([ '*', 100 ]).end
    );

    pdf.create().open();
  }

}
