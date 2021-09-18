import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';

export abstract class DaoCliente {
  abstract async listar(): Promise<ClienteDto[]>;
}
