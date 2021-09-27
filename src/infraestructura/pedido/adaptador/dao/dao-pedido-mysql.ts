import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DaoPedido } from 'src/dominio/pedido/puerto/dao/dao-pedido';
import { PedidoDto } from 'src/aplicacion/pedido/consulta/dto/pedido.dto';
import { PedidoEntidad } from '../../entidad/pedido.entidad';

@Injectable()
export class DaoPedidoMysql implements DaoPedido {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async listar(): Promise<PedidoDto[]> {
    return this.entityManager.query(
      'SELECT u.id, u.precio, u.cliente, u.fechaEntrega, u.fechaCreacion FROM pedido u',
    );
  }

  async buscar(id: number): Promise<any> {
    return this.entityManager
      .getRepository(PedidoEntidad)
      .createQueryBuilder('pedido')
      .leftJoinAndSelect('pedido.pedidosProductos', 'pedido_producto')
      .leftJoinAndSelect('pedido_producto.producto', 'producto')
      .where('pedido.id = :id', { id: id })
      .getMany();
  }
}
