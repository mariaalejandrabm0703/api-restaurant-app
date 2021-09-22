import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import PedidoBuilder from './pedidoBuilder';

describe('pruebas para crear Pedido', () => {

  it('el pedido debería crearse bien', () => {
    const pedido = new PedidoBuilder().PedidoBuilderWithValues();

    expect(pedido.precio).toEqual(1000);
    expect(pedido.cliente).toEqual(1);
    expect(pedido.activo).toEqual('1');
    expect(pedido.fechaEntrega).toEqual('01/01/2021');
    expect(typeof(pedido.productos)).toEqual(typeof(Array <PedidoProducto>()));

  });
});
