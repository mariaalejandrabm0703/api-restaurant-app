import { RepositorioCliente} from '../puerto/repositorio/repositorio-cliente';
import { Cliente } from '../modelo/cliente';
import { ErrorDeNegocio } from 'src/dominio/errores/error-de-negocio';

export class ServicioRegistrarCliente {

  constructor(private readonly _repositorioCliente: RepositorioCliente) {
  }

  async ejecutar(cliente: Cliente) {
    if (await this._repositorioCliente.existeNombreCliente(cliente.identificacion)) {
      throw new ErrorDeNegocio(
        `El usuario ${cliente.nombre} ya existe`,
      );
    }
    await this._repositorioCliente.guardar(cliente);
  }
}
