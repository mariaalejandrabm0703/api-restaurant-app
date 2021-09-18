import { Module } from '@nestjs/common';
import { PedidoControlador } from './controlador/pedido.controlador';
import { PedidoProveedorModule } from './proveedor/pedido-proveedor.module';

@Module({
  imports: [
    PedidoProveedorModule
  ],
  controllers: [PedidoControlador],
})
export class PedidoModule {}
