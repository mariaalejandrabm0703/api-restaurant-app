import { RepositorioPedido } from '../puerto/repositorio/repositorio-pedido';
import { Pedido } from '../modelo/pedido';

export class ServicioRegistrarPedido {

  constructor(private readonly _repositorioPedido: RepositorioPedido) {
  }

  async ejecutar(pedido: Pedido) {    
    await this._repositorioPedido.guardar(pedido);
  }
}
