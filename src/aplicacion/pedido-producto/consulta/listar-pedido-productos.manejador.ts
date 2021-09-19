import { Injectable } from '@nestjs/common';

import { DaoPedidoProducto } from 'src/dominio/pedido-producto/puerto/dao/dao-pedido-producto';
import { PedidoProductoDto } from 'src/aplicacion/pedido-producto/consulta/dto/pedido-producto.dto';

@Injectable()
export class ManejadorListarPedidoProducto {
  constructor(private _daoPedidoProducto: DaoPedidoProducto) {}

  async ejecutar(): Promise<PedidoProductoDto[]> {
    return this._daoPedidoProducto.listar();
  }

  async buscar(id: number): Promise<any[]> {
    return this._daoPedidoProducto.buscar(id);
  }
}
