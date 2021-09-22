import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';
export default class PedidoBuilder
{
    public PedidoBuilderWithValues()
    {
        const _entity = new Pedido(1000, '1', 1, '01/01/2021',Array <PedidoProducto>());
  
        return _entity;
    }
}