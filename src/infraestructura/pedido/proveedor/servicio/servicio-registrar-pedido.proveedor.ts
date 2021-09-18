import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { ServicioRegistrarPedido } from 'src/dominio/pedido/servicio/servicio-registrar-pedido';

export function servicioRegistrarPedidoProveedor(repositorioPedido: RepositorioPedido) {
  return new ServicioRegistrarPedido(repositorioPedido);
}
