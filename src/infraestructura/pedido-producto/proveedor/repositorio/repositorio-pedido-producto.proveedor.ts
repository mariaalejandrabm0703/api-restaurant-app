import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import { RepositorioPedidoProductoMysql } from 'src/infraestructura/pedido-producto/adaptador/repositorio/repositorio-pedido-producto-mysql';

export const repositorioPedidoProductoProvider = {
  provide: RepositorioPedidoProducto,
  useClass: RepositorioPedidoProductoMysql,
};
