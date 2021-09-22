import PedidoProductoBuilder from './pedidoProductoBuilder';

describe('Pruebas de PedidoProducto', () => {

  it('el pedidoProducto debería crearse bien', () => {
    const producto = new PedidoProductoBuilder().PedidoProductoBuilderWithValues();

    expect(producto.pedido).toEqual(1);
    expect(producto.producto).toEqual(1);
    expect(producto.cantidad).toEqual(1);
    expect(producto.precio).toEqual(1);
    expect(typeof(producto.activo)).toEqual('string');
  });
});
