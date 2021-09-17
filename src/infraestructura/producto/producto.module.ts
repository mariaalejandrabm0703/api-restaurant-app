import { Module } from '@nestjs/common';
import { ProductoControlador } from './controlador/producto.controlador';
import { ProductoProveedorModule } from './proveedor/producto-proveedor.module';

@Module({  
  imports: [
    ProductoProveedorModule
  ],
  controllers: [ProductoControlador],
})
export class ProductoModule {}
