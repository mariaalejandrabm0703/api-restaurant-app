import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import ProductoBuilder from './productoBuilder';

describe('Pruebas de Producto', () => {

  it('el producto debería crearse bien', () => {
    const producto = new ProductoBuilder().ProductoBuilderWithValues();

    expect(producto.descripcion).toEqual('Pastas a la carbonara');
    expect(producto.categoria).toEqual('Plato principal');
    expect(producto.precio).toEqual(500);
    expect(producto.activo).toEqual('1');
    expect(typeof(producto.productos)).toEqual(typeof(Array <PedidoProducto>()));
  });
});
