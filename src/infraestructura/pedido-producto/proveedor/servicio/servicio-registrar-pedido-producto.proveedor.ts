import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import { ServicioRegistrarPedidoProducto } from 'src/dominio/pedido-producto/servicio/servicio-registrar-pedido-producto';

export function servicioRegistrarPedidoProductoProveedor(repositorioPedidoProducto: RepositorioPedidoProducto) {
  return new ServicioRegistrarPedidoProducto(repositorioPedidoProducto);
}
