import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { ServicioRegistrarPedido } from 'src/dominio/pedido/servicio/servicio-registrar-pedido';

export function servicioRegistrarPedidoProveedor(repositorioPedido: RepositorioPedido) {
  return new ServicioRegistrarPedido(repositorioPedido);
}
