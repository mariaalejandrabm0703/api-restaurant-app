import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoProductoEntidad } from '../../entidad/pedido-producto.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ProductoEntidad } from 'src/infraestructura/producto/entidad/producto.entidad';
import { PedidoEntidad } from 'src/infraestructura/pedido/entidad/pedido.entidad';

@Injectable()
export class RepositorioPedidoProductoMysql
  implements RepositorioPedidoProducto {
  constructor(
    @InjectRepository(PedidoProductoEntidad)
    private readonly repositorio: Repository<PedidoProductoEntidad>,
  ) {}

  async guardar(producto: PedidoProducto) {
    const entidad = new PedidoProductoEntidad();
    entidad.pedido = new PedidoEntidad();
    entidad.pedido.id = producto.pedido;
    entidad.producto = new ProductoEntidad();
    entidad.producto.id = producto.producto;
    entidad.cantidad = producto.cantidad;
    entidad.precio = producto.precio;
    entidad.activo = producto.activo;
    await this.repositorio.save(entidad);
  }

  async eliminar(id: number) {

    await this.repositorio.createQueryBuilder()
      .delete()
      .from(PedidoProductoEntidad)
      .where('pedidoId = :id', { id: id })
      .execute();
  }
}
