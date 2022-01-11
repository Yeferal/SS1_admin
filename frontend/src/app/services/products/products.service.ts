import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GLOBAL } from '../global';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  loadImg(data: any){
    return this.http.post<any>(GLOBAL.URLSHOP+'/upload-img',data,{
      withCredentials: true
    });
  }

  getProducts(){
    return this.http.get<any>(GLOBAL.URLSHOP+'/products',{
      withCredentials: true
    });
  }

  getProduct(id_product: any){
    return this.http.get<any>(GLOBAL.URLSHOP+'/product/'+id_product,{
      withCredentials: true
    })
  }

  putProduct(id_product: any, data: any){
    return this.http.put<any>(GLOBAL.URLSHOP+'/product/'+id_product,data,{
      withCredentials: true
    })
  }
  putProductImg(id_product: any, data: any){
    return this.http.put<any>(GLOBAL.URLSHOP+'/product-img/'+id_product,data,{
      withCredentials: true
    })
  }

  deleteProduct(id_product: any){
    return this.http.delete<any>(GLOBAL.URLSHOP+'/product/'+id_product,{
      withCredentials: true
    })
  }

}
