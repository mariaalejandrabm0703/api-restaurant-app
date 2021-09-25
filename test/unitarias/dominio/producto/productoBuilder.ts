
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import { Producto } from 'src/dominio/producto/modelo/producto';
export default class ProductoBuilder
{
    public ProductoBuilderWithValues()
    {
        const _entity = new Producto('Pastas a la carbonara', 'Plato principal', 500, '1', Array <PedidoProducto>(), "asdasd.png");
  
        return _entity;
    }
}