export abstract class DaoCliente {
  abstract async buscar(id: string): Promise<any>;
}
