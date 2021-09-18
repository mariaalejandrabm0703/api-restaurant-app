import { PedidoProducto } from '../../modelo/pedido-producto';

export abstract class RepositorioPedidoProducto {
  abstract async guardar(pedidoProducto: PedidoProducto);
}
