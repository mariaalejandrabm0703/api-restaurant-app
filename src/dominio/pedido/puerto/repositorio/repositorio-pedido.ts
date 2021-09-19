import { PedidoDto } from 'src/aplicacion/pedido/consulta/dto/pedido.dto';
import { Pedido } from '../../modelo/pedido';

export abstract class RepositorioPedido {
  abstract async guardar(pedido: Pedido): Promise<number>;
}
