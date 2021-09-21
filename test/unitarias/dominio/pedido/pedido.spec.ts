import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';

describe('pruebas para crear Pedido', () => {

  const _Pedido = Pedido as any;

  it('el pedido debería crearse bien', () => {
    const pedido = new _Pedido(1000, '1', 1, '01/01/2021',Array <PedidoProducto>());

    expect(pedido.precio).toEqual(1000);
    expect(pedido.cliente).toEqual(1);
    expect(pedido.activo).toEqual('1');
    expect(pedido.fechaEntrega).toEqual('01/01/2021');
    expect(typeof(pedido.productos)).toEqual(typeof(Array <PedidoProducto>()));

  });
});
