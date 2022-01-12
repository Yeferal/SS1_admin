import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getAllOrder(){
    return this.http.get<any>(GLOBAL.URLSHOP+'/allOrders',{
      withCredentials: true
    });
  }

  getAllListOneOrder(id_orden: any){
    return this.http.get<any>(GLOBAL.URLSHOP+'/allListOrder/'+id_orden,{
      withCredentials: true
    });
  }

  postEndingOrder(data: any){
    return this.http.post<any>(GLOBAL.URLSHOP+'/ending-order',data,{
      withCredentials: true
    })
  }

  deleteOrder(id_order: any){
    return this.http.delete<any>(GLOBAL.URLSHOP+'/order/'+id_order,{
      withCredentials: true
    })
  }
}
