import { Injectable } from '@nestjs/common';
import { ServicioRegistrarPedido } from 'src/dominio/pedido/servicio/servicio-registrar-pedido';
import { ComandoRegistrarPedido } from './registrar-pedido.comando';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';

@Injectable()
export class ManejadorRegistrarPedido {
  constructor(private _servicioRegistrarPedido: ServicioRegistrarPedido) {}

  async ejecutar(
    comandoRegistrarPedido: ComandoRegistrarPedido,
  ): Promise<number> {
    const pedido = new Pedido(
      comandoRegistrarPedido.precio,
      comandoRegistrarPedido.activo,
      comandoRegistrarPedido.cliente,
      comandoRegistrarPedido.fechaEntrega,
      comandoRegistrarPedido.productos,
    );
    return await this._servicioRegistrarPedido.ejecutar(pedido);
  }

  async actualizar(
    id: number,
    comandoRegistrarPedido: ComandoRegistrarPedido,
  ): Promise<number> {
    return await this._servicioRegistrarPedido.actualizar(
      id,
      comandoRegistrarPedido.precio,
      comandoRegistrarPedido.activo,
      comandoRegistrarPedido.fechaEntrega,
    );
  }
}
