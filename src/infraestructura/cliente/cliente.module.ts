import { Module } from '@nestjs/common';
import { ClienteControlador } from './controlador/cliente.controlador';
import { ClienteProveedorModule } from './proveedor/cliente-proveedor.module';

@Module({
  imports: [
    ClienteProveedorModule
  ],
  controllers: [ClienteControlador],
})
export class ClienteModule {}
