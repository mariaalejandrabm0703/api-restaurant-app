import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { RepositorioPedidoMysql } from 'src/infraestructura/pedido/adaptador/repositorio/repositorio-pedido-mysql';

export const repositorioPedidoProvider = {
  provide: RepositorioPedido,
  useClass: RepositorioPedidoMysql,
};
