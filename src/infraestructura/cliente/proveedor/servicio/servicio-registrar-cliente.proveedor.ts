import { RepositorioCliente } from 'src/dominio/cliente/puerto/repositorio/repositorio-cliente';
import { ServicioRegistrarCliente } from 'src/dominio/cliente/servicio/servicio-registrar-cliente';

export function servicioRegistrarClienteProveedor(repositorioCliente: RepositorioCliente) {
  return new ServicioRegistrarCliente(repositorioCliente);
}
