import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from './global'

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient) { }

  gerReportSales(fecha: any){
    return this.http.get<any>(GLOBAL.URLSHOP+'/report-sales/'+fecha,{
      withCredentials: true
    });
  }

  gerReportBills(fecha: any){
    return this.http.get<any>(GLOBAL.URLSHOP+'/report-bills/'+fecha,{
      withCredentials: true
    });
  }

  gerReportUser(fecha: any){
    return this.http.get<any>(GLOBAL.URLSHOP+'/report-user/'+fecha,{
      withCredentials: true
    });
  }

  gerReportOrders(fecha: any){
    return this.http.get<any>(GLOBAL.URLSHOP+'/report-orders/'+fecha,{
      withCredentials: true
    });
  }
}
