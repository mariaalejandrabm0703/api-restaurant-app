import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';


describe('Pruebas de PedidoProducto', () => {

  const _PedidoProducto = PedidoProducto as any;

  it('el pedidoProducto debería crearse bien', () => {
    const producto = new _PedidoProducto(1,1,1,1,'1');

    expect(producto.pedido).toEqual(1);
    expect(producto.producto).toEqual(1);
    expect(producto.cantidad).toEqual(1);
    expect(producto.precio).toEqual(1);
    expect(typeof(producto.activo)).toEqual('string');
  });
});
