import { Injectable } from '@nestjs/common';
import { ServicioRegistrarPedidoProducto } from 'src/dominio/pedido-producto/servicio/servicio-registrar-pedido-producto';
import { ComandoRegistrarPedidoProducto } from './registrar-pedido-producto.comando';
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';

@Injectable()
export class ManejadorRegistrarPedidoProducto {
  constructor(private _servicioRegistrarPedidoProducto: ServicioRegistrarPedidoProducto) {}

  async ejecutar(comandoRegistrarPedidoProducto: ComandoRegistrarPedidoProducto) {
    await this._servicioRegistrarPedidoProducto.ejecutar(
      new PedidoProducto(
        comandoRegistrarPedidoProducto.idPedido,
        comandoRegistrarPedidoProducto.idProducto,
        comandoRegistrarPedidoProducto.cantidad,
        comandoRegistrarPedidoProducto.precio,
        comandoRegistrarPedidoProducto.activo
      ),
    );
  }

  async eliminar(id: number){
    await this._servicioRegistrarPedidoProducto.eliminar(id);
  }
}
