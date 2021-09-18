import { EntityManager } from 'typeorm';
import { InjectEntityManager } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';

@Injectable()
export class DaoClienteMysql implements DaoCliente {
  constructor(
    @InjectEntityManager()
    private readonly entityManager: EntityManager,
  ) {}

  async listar(): Promise<ClienteDto[]> {
    return this.entityManager.query(
      'SELECT u.id, u.identificacion,u.activo, u.nombre, u.fechaCreacion FROM cliente u',
    );
  }
}
