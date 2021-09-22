import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
export default class PedidoProductoBuilder
{
    public PedidoProductoBuilderWithValues()
    {
        const _entity = new PedidoProducto(1,1,1,1,'1');
  
        return _entity;
    }
}