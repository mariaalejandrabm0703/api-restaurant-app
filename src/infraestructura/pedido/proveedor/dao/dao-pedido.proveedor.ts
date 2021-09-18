import { DaoPedido } from 'src/dominio/pedido/puerto/dao/dao-pedido';
import { DaoPedidoMysql } from 'src/infraestructura/pedido/adaptador/dao/dao-pedido-mysql';

export const daoPedidoProvider = {
  provide: DaoPedido,
  useClass: DaoPedidoMysql,
};
