import { SinonStubbedInstance } from 'sinon';
import { createStubObj } from '../../../util/create-object.stub';
import { ServicioRegistrarPedidoProducto } from 'src/dominio/pedido-producto/servicio/servicio-registrar-pedido-producto';
import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import PedidoProductoBuilder from './pedidoProductoBuilder';


describe('ServicioRegistrarProducto', () => {

  let servicioRegistrarPedidoProducto: ServicioRegistrarPedidoProducto;
  let repositorioPedidoProductoStub: SinonStubbedInstance<RepositorioPedidoProducto>;

  beforeEach(() => {

    repositorioPedidoProductoStub = createStubObj<RepositorioPedidoProducto>(['eliminar', 'guardar']);
    servicioRegistrarPedidoProducto = new ServicioRegistrarPedidoProducto(repositorioPedidoProductoStub);
  });

  it('si se envia un id se ejecuta el eliminar', async () => {

    await servicioRegistrarPedidoProducto.eliminar(1);

    expect(repositorioPedidoProductoStub.eliminar.getCalls().length).toBe(1);
    expect(repositorioPedidoProductoStub.eliminar.calledWith(1)).toBeTruthy();
  
  });

  it('si se ejecuta con un pedidoProducto se guarda el producto el repositorio', async () => {
    const producto = new PedidoProductoBuilder().PedidoProductoBuilderWithValues();

    await servicioRegistrarPedidoProducto.ejecutar(producto);

    expect(repositorioPedidoProductoStub.guardar.getCalls().length).toBe(1);
    expect(repositorioPedidoProductoStub.guardar.calledWith(producto)).toBeTruthy();
  });
});
