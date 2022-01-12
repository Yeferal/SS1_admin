import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { UserOrder } from 'src/app/models/user-order';
import { ReportsService } from 'src/app/services/reports.service';

@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {

  formDate: FormGroup = new FormGroup({
    fecha: new FormControl(null,null)
  });
  
  listAccounts: Account [] = [];
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
    this.reportService.gerReportUser(data).subscribe(
      res => {
        console.log(res);
        this.listAccounts = res;
        // this.total = 0.00;
        // this.listAccounts.forEach(usr => {
        //   this.total = this.total + Number(usr.total);
        // });
      },
      error =>{
        console.log(error);
      }
    );
  }
}
