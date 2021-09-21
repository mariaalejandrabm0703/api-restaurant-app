import { Cliente } from 'src/dominio/cliente/modelo/cliente';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';

describe('Usuario', () => {

  const _Cliente = Cliente as any;

  it('cliente debería crear bien', () => {
    const cliente = new _Cliente('Maria', '1090495415', '3042912566','maria@maria.com', '1', Array <Pedido>());

    expect(cliente.nombre).toEqual('Maria');
    expect(cliente.identificacion).toEqual('1090495415');
  });
});
