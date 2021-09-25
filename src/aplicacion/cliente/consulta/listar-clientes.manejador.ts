import { Injectable } from '@nestjs/common';
import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';

@Injectable()
export class ManejadorListarCliente {
  constructor(private _daoUsuario: DaoCliente) {}

  async buscar(id: string): Promise<any> {
    return this._daoUsuario.buscar(id);
  }
}
