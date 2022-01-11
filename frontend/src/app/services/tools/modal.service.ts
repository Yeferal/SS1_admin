import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  invocationAddProduct = new EventEmitter();
  
  constructor() { }

  onAddProduct(data:any){
    this.invocationAddProduct.emit(data);
  }
}
