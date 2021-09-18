import { Module } from '@nestjs/common';
import { ServicioRegistrarPedido } from 'src/dominio/pedido/servicio/servicio-registrar-pedido';
import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { servicioRegistrarPedidoProveedor } from './servicio/servicio-registrar-pedido.proveedor';
import { repositorioPedidoProvider } from './repositorio/repositorio-pedido.proveedor';
import { daoPedidoProvider } from './dao/dao-pedido.proveedor';
import { ManejadorRegistrarPedido } from 'src/aplicacion/pedido/comando/registar-pedido.manejador';
import { ManejadorListarPedido } from 'src/aplicacion/pedido/consulta/listar-pedidos.manejador';
import { DaoPedido } from 'src/dominio/pedido/puerto/dao/dao-pedido';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoEntidad } from '../entidad/pedido.entidad';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoEntidad])],
  providers: [
    { provide: ServicioRegistrarPedido, inject: [RepositorioPedido], useFactory: servicioRegistrarPedidoProveedor },
    repositorioPedidoProvider,
    daoPedidoProvider,
    ManejadorRegistrarPedido,
    ManejadorListarPedido,
  ],
  exports: [
    ServicioRegistrarPedido,
    ManejadorRegistrarPedido,
    ManejadorListarPedido,
    RepositorioPedido,
    DaoPedido,
  ],
})
export class PedidoProveedorModule {

}
