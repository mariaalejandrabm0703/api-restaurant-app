import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import { Producto } from 'src/dominio/producto/modelo/producto';

describe('Pruebas de Producto', () => {

  const _Producto = Producto as any;

  it('el producto debería crearse bien', () => {
    const producto = new _Producto('Pastas a la carbonara', 'Plato principal', 500, '1', Array <PedidoProducto>());

    expect(producto.descripcion).toEqual('Pastas a la carbonara');
    expect(producto.categoria).toEqual('Plato principal');
    expect(producto.precio).toEqual(500);
    expect(producto.activo).toEqual('1');
    expect(typeof(producto.productos)).toEqual(typeof(Array <PedidoProducto>()));
  });
});
