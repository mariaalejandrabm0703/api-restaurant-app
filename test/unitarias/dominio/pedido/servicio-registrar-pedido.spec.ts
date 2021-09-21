import { SinonStubbedInstance } from 'sinon';
import { createStubObj } from '../../../util/create-object.stub';
import { ServicioRegistrarPedido } from 'src/dominio/pedido/servicio/servicio-registrar-pedido';
import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';


describe('ServicioRegistrarPedido', () => {

  let servicioRegistrarPedido: ServicioRegistrarPedido;
  let repositorioPedidoStub: SinonStubbedInstance<RepositorioPedido>;

  beforeEach(() => {

    repositorioPedidoStub = createStubObj<RepositorioPedido>(['actualizar', 'guardar']);
    servicioRegistrarPedido = new ServicioRegistrarPedido(repositorioPedidoStub);
  });

  it('se debe ejecutar el guardado con los parametros correctos', async () => {

    const pedido = new Pedido(1000, '1', 1, '01/01/2021',Array <PedidoProducto>());
    await servicioRegistrarPedido.ejecutar(pedido);

    expect(repositorioPedidoStub.guardar.getCalls().length).toBe(1);
    expect(repositorioPedidoStub.guardar.calledWith(pedido)).toBeTruthy();
  });

  it('se debe actualizar el pedido creado', async () => {

    await servicioRegistrarPedido.actualizar(1, 150, '1', '02/01/2021');

    expect(repositorioPedidoStub.actualizar.getCalls().length).toBe(1);
    expect(repositorioPedidoStub.actualizar.calledWith(1, 150, '1', '02/01/2021')).toBeTruthy();
  });
});
