import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';
import { DaoProductoMysql } from 'src/infraestructura/producto/adaptador/dao/dao-producto-mysql';

export const daoProductoProvider = {
  provide: DaoProducto,
  useClass: DaoProductoMysql,
};
