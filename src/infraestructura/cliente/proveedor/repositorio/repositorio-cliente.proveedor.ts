import { RepositorioCliente } from 'src/dominio/cliente/puerto/repositorio/repositorio-cliente';
import { RepositorioClienteMysql } from 'src/infraestructura/cliente/adaptador/repositorio/repositorio-cliente-mysql';

export const repositorioClienteProvider = {
  provide: RepositorioCliente,
  useClass: RepositorioClienteMysql,
};
