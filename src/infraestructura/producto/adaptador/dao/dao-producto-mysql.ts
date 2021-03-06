import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';
import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';

@Injectable()
export class DaoProductoMysql implements DaoProducto {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async listar(): Promise<ProductoDto[]> {
    return this.entityManager.query(
      'SELECT * FROM producto p WHERE p.activo = 1',
    );
  }

  async listarProductosVendidos(): Promise<ProductoDto[]> {
    return this.entityManager.query(
      `SELECT 	producto.*,
      COUNT(pedido_producto.productoId) cantidad
      FROM producto, pedido_producto
      WHERE producto.id = pedido_producto.productoId
      GROUP BY pedido_producto.productoId
      ORDER BY cantidad DESC
      LIMIT 0 , 5`, 
    );
  }
}
