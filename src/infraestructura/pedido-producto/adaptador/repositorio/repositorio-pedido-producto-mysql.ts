import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoProductoEntidad } from '../../entidad/pedido-producto.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositorioPedidoProductoMysql implements RepositorioPedidoProducto {
  constructor(
    @InjectRepository(PedidoProductoEntidad)
    private readonly repositorio: Repository<PedidoProductoEntidad>,
  ) {}

  async guardar(producto: PedidoProducto) {
    const entidad = new PedidoProductoEntidad();
    entidad.idPedido = producto.idPedido;
    entidad.idProducto = producto.idProducto;
    entidad.cantidad = producto.cantidad;
    entidad.precio = producto.precio;
    entidad.activo = producto.activo;
    entidad.fechaCreacion = producto.fechaCreacion;
    await this.repositorio.save(entidad);
  }
}
