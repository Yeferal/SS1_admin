import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-table-list-products',
  templateUrl: './table-list-products.component.html',
  styleUrls: ['./table-list-products.component.scss']
})
export class TableListProductsComponent implements OnInit {

  listProducts: Product [] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(
      res => {
        this.listProducts = res;
      },
      error => {
        console.log(error);
        
      }
    );
  }
  deleteProduct(id_product: any, id: any){
    this.productService.deleteProduct(id_product).subscribe(
      res => {
        // this.listProducts = res;
        this.listProducts.splice(id,1);
        // console.log(res);
      },
      error => {
        console.log(error);
        
      }
    );
  }

}
