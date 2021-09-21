import { RepositorioProducto } from 'src/dominio/producto/puerto/repositorio/repositorio-producto';
import { ServicioRegistrarProducto } from 'src/dominio/producto/servicio/servicio-registrar-producto';

export function servicioRegistrarProductoProveedor(repositorioProducto: RepositorioProducto) {
  return new ServicioRegistrarProducto(repositorioProducto);
}
