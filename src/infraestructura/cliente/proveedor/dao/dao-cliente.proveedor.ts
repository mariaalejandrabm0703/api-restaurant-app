import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { DaoClienteMysql } from 'src/infraestructura/cliente/adaptador/dao/dao-cliente-mysql';

export const daoClienteProvider = {
  provide: DaoCliente,
  useClass: DaoClienteMysql,
};
