import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-table-list-orders',
  templateUrl: './table-list-orders.component.html',
  styleUrls: ['./table-list-orders.component.scss']
})
export class TableListOrdersComponent implements OnInit {

  listOrders: Order [] = [];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(){
    this.orderService.getAllOrder().subscribe(
      res => {
        console.log(res);
        this.listOrders = res;
      },
      error =>{
        console.log(error);
        
      }
    );
  }
  
  deleteOrder(id: any){
    const id_order = id;
    this.orderService.deleteOrder(id_order).subscribe(
      res => {
        console.log(res);
        this.getAllOrders();
        // this.router.navigate(['/list-orders']);
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
