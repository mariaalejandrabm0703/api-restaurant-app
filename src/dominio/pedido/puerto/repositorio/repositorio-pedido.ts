import { Pedido } from '../../modelo/pedido';

export abstract class RepositorioPedido {
  abstract async guardar(pedido: Pedido): Promise<number>;
  abstract async actualizar(id:number, precio: number, activo: string): Promise<number>;
}
