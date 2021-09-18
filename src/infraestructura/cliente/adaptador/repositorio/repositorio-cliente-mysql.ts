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

  async existeNombreCliente(nombre: string): Promise<boolean> {
    return (await this.repositorio.count({ nombre })) > 0;
  }

  async guardar(cliente: Cliente) {
    const entidad = new ClienteEntidad();
    entidad.identificacion = cliente.identificacion;
    entidad.fechaCreacion = cliente.fechaCreacion;
    entidad.nombre = cliente.nombre;
    entidad.telefono = cliente.telefono;
    entidad.email = cliente.email;
    await this.repositorio.save(entidad);
  }
}
