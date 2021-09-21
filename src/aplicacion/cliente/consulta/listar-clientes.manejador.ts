import { Injectable } from '@nestjs/common';

import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';

@Injectable()
export class ManejadorListarCliente {
  constructor(private _daoUsuario: DaoCliente) {}

  async buscar(id: number): Promise<ClienteDto> {
    return this._daoUsuario.buscar(id);
  }
}
