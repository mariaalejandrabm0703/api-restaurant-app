import { RepositorioPedido } from '../puerto/repositorio/repositorio-pedido';
import { Pedido } from '../modelo/pedido';
export class ServicioRegistrarPedido {

  constructor(private readonly _repositorioPedido: RepositorioPedido) {
  }

  async ejecutar(pedido: Pedido): Promise<number> {    
    return await this._repositorioPedido.guardar(pedido);
  }

  async actualizar(id:number, precio: number, activo: string): Promise<number> {    
    return await this._repositorioPedido.actualizar(id, precio, activo);
  }
}
