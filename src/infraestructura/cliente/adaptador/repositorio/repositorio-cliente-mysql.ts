import { RepositorioCliente } from 'src/dominio/cliente/puerto/repositorio/repositorio-cliente';
import { Cliente } from 'src/dominio/cliente/modelo/cliente';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntidad } from '../../entidad/cliente.entidad';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositorioClienteMysql implements RepositorioCliente {
  constructor(
    @InjectRepository(ClienteEntidad)
    private readonly repositorio: Repository<ClienteEntidad>,
  ) {}

  async existeNombreCliente(identificacion: string): Promise<boolean> {
    return (await this.repositorio.count({ identificacion })) > 0;
  }

  async guardar(cliente: Cliente) {
    const entidad = new ClienteEntidad();
    entidad.identificacion = cliente.identificacion;
    entidad.nombre = cliente.nombre;
    entidad.telefono = cliente.telefono;
    entidad.email = cliente.email;
    entidad.activo = cliente.activo;
    await this.repositorio.save(entidad);
  }
}
