import { ListOrder } from "./list-order";
import { UserOrder } from "./user-order";

export class Order {

    id_orden: any;
    id_usuario: any;
    direccion: any;
    no_tarjeta: any;
    total: any;
    fecha: any;
    estado: any;
    entregado: any;
    id_cuenta: any;
    User?: UserOrder;
    ListOrders?: ListOrder [];

}
