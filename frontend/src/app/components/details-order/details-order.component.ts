import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Order } from 'src/app/models/order';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-details-order',
  templateUrl: './details-order.component.html',
  styleUrls: ['./details-order.component.scss']
})
export class DetailsOrderComponent implements OnInit {

  order: Order = new Order();

  constructor(private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllListOneOrder();
  }

  getAllListOneOrder(){
    const id_order = this.route.snapshot.paramMap.get('id_order');
    this.orderService.getAllListOneOrder(id_order).subscribe(
      res => {
        this.order = res;
        console.log(res);
        
      },
      error => {
        console.log(error);
        
      }
    )
  }

  procedOrder(){
    let data = {
      id_order: this.order.id_orden,
      id_cuenta: this.order.id_cuenta,
      total: this.order.total
    };

    this.orderService.postEndingOrder(data).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-orders']);
      },
      error => {
        console.log(error);
        
      }
    );
  }

  deleteOrder(){
    const id_order = this.route.snapshot.paramMap.get('id_order');
    this.orderService.deleteOrder(id_order).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/list-orders']);
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
