import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Sale } from 'src/app/models/sale';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  formDate: FormGroup = new FormGroup({
    fecha: new FormControl(null,null)
  });

  listSales: Sale [] = [];
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
    this.reportService.gerReportSales(data).subscribe(
      res => {
        console.log(res);
        this.listSales = res;
        this.total = 0.00;
        this.listSales.forEach(sales => {
          this.total = this.total + Number(sales.total);
        });
      },
      error =>{
        console.log(error);
      }
    );
    
  }

}
