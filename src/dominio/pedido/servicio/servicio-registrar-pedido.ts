import { RepositorioPedido } from '../puerto/repositorio/repositorio-pedido';
import { Pedido } from '../modelo/pedido';
export class ServicioRegistrarPedido {

  constructor(private readonly _repositorioPedido: RepositorioPedido) {
  }

  async ejecutar(pedido: Pedido): Promise<number> {    
    return this._repositorioPedido.guardar(pedido);
  }

  async actualizar(id:number, precio: number, activo: string, fechaEntrega: string): Promise<number> {    
    return this._repositorioPedido.actualizar(id, precio, activo, fechaEntrega);
  }
}
