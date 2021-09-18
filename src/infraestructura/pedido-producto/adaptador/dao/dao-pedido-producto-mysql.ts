import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DaoPedidoProducto } from 'src/dominio/pedido-producto/puerto/dao/dao-pedido-producto';
import { PedidoProductoDto } from 'src/aplicacion/pedido-producto/consulta/dto/pedido-producto.dto';

@Injectable()
export class DaoPedidoProductoMysql implements DaoPedidoProducto {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async listar(): Promise<PedidoProductoDto[]> {
    return this.entityManager.query(
      'SELECT u.id, u.idPedido, u.idProducto, u.cantidad, u.precio FROM pedido_producto u',
    );
  }
}
