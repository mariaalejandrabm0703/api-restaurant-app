import { Module } from '@nestjs/common';
import { daoProductoProvider } from './dao/dao-producto.proveedor';
import { ManejadorListarProducto } from 'src/aplicacion/producto/consulta/list-producto.manejador';
import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoEntidad } from '../entidad/producto.entidad';

@Module({
  imports: [TypeOrmModule.forFeature([ProductoEntidad])],
  providers: [
    daoProductoProvider,
    ManejadorListarProducto,
  ],
  exports: [
    ManejadorListarProducto,
    DaoProducto,
  ],
})
export class ProductoProveedorModule {

}
