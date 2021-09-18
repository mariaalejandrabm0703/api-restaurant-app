import { Module } from '@nestjs/common';
import { ServicioRegistrarCliente } from 'src/dominio/cliente/servicio/servicio-registrar-cliente';
import { RepositorioCliente } from 'src/dominio/cliente/puerto/repositorio/repositorio-cliente';
import { servicioRegistrarClienteProveedor } from './servicio/servicio-registrar-cliente.proveedor';
import { repositorioClienteProvider } from './repositorio/repositorio-cliente.proveedor';
import { daoClienteProvider } from './dao/dao-cliente.proveedor';
import { ManejadorRegistrarCliente } from 'src/aplicacion/cliente/comando/registar-cliente.manejador';
import { ManejadorListarCliente } from 'src/aplicacion/cliente/consulta/listar-clientes.manejador';
import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteEntidad } from '../entidad/cliente.entidad';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteEntidad])],
  providers: [
    { provide: ServicioRegistrarCliente, inject: [RepositorioCliente], useFactory: servicioRegistrarClienteProveedor },
    repositorioClienteProvider,
    daoClienteProvider,
    ManejadorRegistrarCliente,
    ManejadorListarCliente,
  ],
  exports: [
    ServicioRegistrarCliente,
    ManejadorRegistrarCliente,
    ManejadorListarCliente,
    RepositorioCliente,
    DaoCliente,
  ],
})
export class ClienteProveedorModule {

}
