import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoEntidad } from '../../entidad/pedido.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositorioPedidoMysql implements RepositorioPedido {
  constructor(
    @InjectRepository(PedidoEntidad)
    private readonly repositorio: Repository<PedidoEntidad>,
  ) {}

  async guardar(pedido: Pedido): Promise<number>{
    const entidad = new PedidoEntidad();
    entidad.idCliente = pedido.idCliente;
    entidad.precio = pedido.precio;
    entidad.activo = pedido.activo;
    const ped = await this.repositorio.save(entidad);
    return ped.id;
  }
}
