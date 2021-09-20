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
      'SELECT u.id, u.pedido, u.producto, u.cantidad, u.precio FROM pedido_producto u',
    );
  }

  async buscar(id: number): Promise<any[]> {
    return await this.entityManager.find('pedido_producto', {
      where: { pedido: id },
    });
  }
}
