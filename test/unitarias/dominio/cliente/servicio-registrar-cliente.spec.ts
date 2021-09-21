import { SinonStubbedInstance } from 'sinon';
import { createStubObj } from '../../../util/create-object.stub';
import { ServicioRegistrarCliente } from 'src/dominio/cliente/servicio/servicio-registrar-cliente';
import { RepositorioCliente } from 'src/dominio/cliente/puerto/repositorio/repositorio-cliente';
import { Cliente } from 'src/dominio/cliente/modelo/cliente';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';


describe('ServicioRegistrarCliente', () => {

  let servicioRegistrarCliente: ServicioRegistrarCliente;
  let repositorioClienteStub: SinonStubbedInstance<RepositorioCliente>;

  beforeEach(() => {

    repositorioClienteStub = createStubObj<RepositorioCliente>(['existeNombreCliente', 'guardar']);
    servicioRegistrarCliente = new ServicioRegistrarCliente(repositorioClienteStub);
  });

  it('si la identificacion de cliente ya existe no se puede crear y deberia retonar error', async () => {

    repositorioClienteStub.existeNombreCliente.returns(Promise.resolve(true));

    await expect(
      servicioRegistrarCliente.ejecutar(
        new Cliente('Maria', '1090495415', '3042912566','maria@maria.com', '1', Array <Pedido>()),
      ),
    ).rejects.toThrow('El usuario Maria ya existe');
  });

  it('si la identificación no existe guarda el cliente el repositorio', async () => {
    const cliente = new Cliente('Maria', '1090495415', '3042912566','maria@maria.com', '1', Array <Pedido>());
    repositorioClienteStub.existeNombreCliente.returns(Promise.resolve(false));

    await servicioRegistrarCliente.ejecutar(cliente);

    expect(repositorioClienteStub.guardar.getCalls().length).toBe(1);
    expect(repositorioClienteStub.guardar.calledWith(cliente)).toBeTruthy();
  });
});
