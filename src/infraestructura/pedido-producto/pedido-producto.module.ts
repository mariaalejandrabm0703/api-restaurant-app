import { Module } from '@nestjs/common';
import { PedidoProductoControlador } from './controlador/pedido-producto.controlador';
import { PedidoProductoProveedorModule } from './proveedor/pedido-producto-proveedor.module';

@Module({
  imports: [
    PedidoProductoProveedorModule
  ],
  controllers: [PedidoProductoControlador],
})
export class PedidoProductoModule {}
