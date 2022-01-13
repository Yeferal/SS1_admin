import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Bill } from 'src/app/models/bill';
import { ReportsService } from 'src/app/services/reports.service';

// import {  } from "pdfmake/build/";
// import {pdfMake} from "pdfmake/build/pdfmake";
// import {pdfFonts} from "pdfmake/build/vfs_fonts";


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

}
