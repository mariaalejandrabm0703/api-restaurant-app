import { PedidoDto } from 'src/aplicacion/pedido/consulta/dto/pedido.dto';

export abstract class DaoPedido {
  abstract async listar(): Promise<PedidoDto[]>;
  abstract async buscar(id: number): Promise<any>;
}
