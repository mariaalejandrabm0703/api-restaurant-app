import { Cliente } from 'src/dominio/cliente/modelo/cliente';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';

describe('Pruebas de Cliente', () => {

  const _Cliente = Cliente as any;

  it('el cliente debería crearse bien', () => {
    const cliente = new _Cliente('Maria', '1090495415', '3042912566','maria@maria.com', '1', Array <Pedido>());

    expect(cliente.nombre).toEqual('Maria');
    expect(cliente.identificacion).toEqual('1090495415');
    expect(cliente.telefono).toEqual('3042912566');
    expect(cliente.email).toEqual('maria@maria.com');
    expect(cliente.activo).toEqual('1');
    expect(typeof(cliente.pedidos)).toEqual(typeof(Array <Pedido>()));
  });
});
