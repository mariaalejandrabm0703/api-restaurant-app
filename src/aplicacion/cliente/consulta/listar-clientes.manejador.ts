import { Injectable } from '@nestjs/common';

import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';

@Injectable()
export class ManejadorListarCliente {
  constructor(private _daoUsuario: DaoCliente) {}

  async ejecutar(): Promise<ClienteDto[]> {
    return this._daoUsuario.listar();
  }
}
