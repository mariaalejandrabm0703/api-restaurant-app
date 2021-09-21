import { Producto } from '../../modelo/producto';

export abstract class RepositorioProducto {
  abstract async existeNombreProducto(nombre: string): Promise<boolean>;
  abstract async guardar(producto: Producto);
}
