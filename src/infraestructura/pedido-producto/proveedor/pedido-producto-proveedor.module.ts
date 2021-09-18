import { Module } from '@nestjs/common';
import { ServicioRegistrarPedidoProducto } from 'src/dominio/pedido-producto/servicio/servicio-registrar-pedido-producto';
import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import { servicioRegistrarPedidoProductoProveedor } from './servicio/servicio-registrar-pedido-producto.proveedor';
import { repositorioPedidoProductoProvider } from './repositorio/repositorio-pedido-producto.proveedor';
import { daoPedidoProductoProvider } from './dao/dao-pedido-producto.proveedor';
import { ManejadorRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registar-pedido-producto.manejador';
import { ManejadorListarPedidoProducto } from 'src/aplicacion/pedido-producto/consulta/listar-pedido-productos.manejador';
import { DaoPedidoProducto } from 'src/dominio/pedido-producto/puerto/dao/dao-pedido-producto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoProductoEntidad } from '../entidad/pedido-producto.entidad';

@Module({
  imports: [TypeOrmModule.forFeature([PedidoProductoEntidad])],
  providers: [
    { provide: ServicioRegistrarPedidoProducto, inject: [RepositorioPedidoProducto], useFactory: servicioRegistrarPedidoProductoProveedor },
    repositorioPedidoProductoProvider,
    daoPedidoProductoProvider,
    ManejadorRegistrarPedidoProducto,
    ManejadorListarPedidoProducto,
  ],
  exports: [
    ServicioRegistrarPedidoProducto,
    ManejadorRegistrarPedidoProducto,
    ManejadorListarPedidoProducto,
    RepositorioPedidoProducto,
    DaoPedidoProducto,
  ],
})
export class PedidoProductoProveedorModule {

}
