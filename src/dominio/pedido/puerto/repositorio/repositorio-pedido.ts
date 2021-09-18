import { Pedido } from '../../modelo/pedido';

export abstract class RepositorioPedido {
  abstract async guardar(pedido: Pedido);
}
