import { Cliente } from '../../modelo/cliente';

export abstract class RepositorioCliente {
  abstract async existeNombreCliente(nombre: string): Promise<boolean>;
  abstract async guardar(cliente: Cliente): Promise <number>;
}
