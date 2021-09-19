import { PedidoProductoDto } from 'src/aplicacion/pedido-producto/consulta/dto/pedido-producto.dto';

export abstract class DaoPedidoProducto {
  abstract async listar(): Promise<PedidoProductoDto[]>;
  abstract async buscar(id: number): Promise<any[]>;
}
