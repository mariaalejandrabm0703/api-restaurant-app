import { Pedido } from 'src/dominio/pedido/modelo/pedido';
import ClienteBuilder from './clienteBuilder';

describe('Pruebas de Cliente', () => {

  it('el cliente debería crearse bien', () => {
    const cliente = new ClienteBuilder().ClienteBuilderWithValues();

    expect(cliente.nombre).toEqual('Maria');
    expect(cliente.identificacion).toEqual('1090495415');
    expect(cliente.telefono).toEqual('3042912566');
    expect(cliente.email).toEqual('maria@maria.com');
    expect(cliente.activo).toEqual('1');
    expect(typeof(cliente.pedidos)).toEqual(typeof(Array <Pedido>()));
  });
});
