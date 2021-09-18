import { RepositorioPedidoProducto } from '../puerto/repositorio/repositorio-pedido-producto';
import { PedidoProducto } from '../modelo/pedido-producto';

export class ServicioRegistrarPedidoProducto {

  constructor(private readonly _repositorioPedidoProducto: RepositorioPedidoProducto) {
  }

  async ejecutar(pedidoProducto: PedidoProducto) {
     await this._repositorioPedidoProducto.guardar(pedidoProducto);
  }
}
