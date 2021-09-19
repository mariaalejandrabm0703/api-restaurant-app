import { Module } from '@nestjs/common';
import { PedidoProductoProveedorModule } from '../pedido-producto/proveedor/pedido-producto-proveedor.module';
import { PedidoControlador } from './controlador/pedido.controlador';
import { PedidoProveedorModule } from './proveedor/pedido-proveedor.module';

@Module({
  imports: [
    PedidoProveedorModule, PedidoProductoProveedorModule
  ],
  controllers: [PedidoControlador],
})
export class PedidoModule {}
