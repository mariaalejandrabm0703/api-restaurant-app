import { DaoPedidoProducto } from 'src/dominio/pedido-producto/puerto/dao/dao-pedido-producto';
import { DaoPedidoProductoMysql } from 'src/infraestructura/pedido-producto/adaptador/dao/dao-pedido-producto-mysql';

export const daoPedidoProductoProvider = {
  provide: DaoPedidoProducto,
  useClass: DaoPedidoProductoMysql,
};
