import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntidad } from '../../entidad/pedido.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { ClienteEntidad } from 'src/infraestructura/cliente/entidad/cliente.entidad';

@Injectable()
export class RepositorioPedidoMysql implements RepositorioPedido {
  constructor(
    @InjectRepository(PedidoEntidad)
    private readonly repositorio: Repository<PedidoEntidad>,
  ) {}

  async guardar(pedido: Pedido): Promise<number>{
    const entidad = new PedidoEntidad();
    // entidad.cliente = new ClienteEntidad();
    entidad.precio = pedido.precio;
    entidad.activo = pedido.activo;
    entidad.fechaEntrega = pedido.fechaEntrega;
    const ped = await this.repositorio.save(entidad);
    return ped.id;
  }

  async actualizar(id:number, precio: number, activo: string, fechaEntrega: string): Promise<number>{
    await this.repositorio.update(id, {precio:precio, activo: activo, fechaEntrega: fechaEntrega});
    return id;
  }
}
