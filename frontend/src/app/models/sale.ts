import { Bill } from "./bill";
import { Product } from "./product";

export class Sale {
    id: any;
    no_factura: any;
    id_producto: any;
    precio_unitario: any;
    cantidad: any;
    total: any;
    Product?: Product;
    Bill?: Bill
}
