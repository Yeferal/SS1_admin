import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/models/order';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-order-report',
  templateUrl: './order-report.component.html',
  styleUrls: ['./order-report.component.scss']
})
export class OrderReportComponent implements OnInit {

  formDate: FormGroup = new FormGroup({
    fecha: new FormControl(null,null)
  });
  
  listOrders: Order [] = [];
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
    this.reportService.gerReportOrders(data).subscribe(
      res => {
        console.log(res);
        this.listOrders = res;
        this.total = 0.00;
        this.listOrders.forEach(order => {
          this.total = this.total + Number(order.total);
        });
      },
      error =>{
        console.log(error);
      }
    );
    
  }

}
