import { SinonStubbedInstance } from 'sinon';
import { createStubObj } from '../../../util/create-object.stub';
import { ServicioRegistrarProducto } from 'src/dominio/producto/servicio/servicio-registrar-producto';
import { RepositorioProducto } from 'src/dominio/producto/puerto/repositorio/repositorio-producto';
import ProductoBuilder from './productoBuilder';

describe('ServicioRegistrarProducto', () => {

  let servicioRegistrarProducto: ServicioRegistrarProducto;
  let repositorioProductoStub: SinonStubbedInstance<RepositorioProducto>;

  beforeEach(() => {

    repositorioProductoStub = createStubObj<RepositorioProducto>(['existeNombreProducto', 'guardar']);
    servicioRegistrarProducto = new ServicioRegistrarProducto(repositorioProductoStub);
  });

  it('si la descripcion de producto ya existe no se puede crear y deberia retonar error', async () => {

    repositorioProductoStub.existeNombreProducto.returns(Promise.resolve(true));

    await expect(
      servicioRegistrarProducto.ejecutar(
        new ProductoBuilder().ProductoBuilderWithValues()
      ),
    ).rejects.toThrow('El nombre de producto Pastas a la carbonara ya existe');
  });

  it('si la descripcion no existe guarda el producto el repositorio', async () => {
    const producto = new ProductoBuilder().ProductoBuilderWithValues();
    repositorioProductoStub.existeNombreProducto.returns(Promise.resolve(false));

    await servicioRegistrarProducto.ejecutar(producto);

    expect(repositorioProductoStub.guardar.getCalls().length).toBe(1);
    expect(repositorioProductoStub.guardar.calledWith(producto)).toBeTruthy();
  });
});
