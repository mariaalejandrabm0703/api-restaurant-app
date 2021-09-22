import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { createSandbox, SinonStubbedInstance } from 'sinon';
import { createStubObj } from '../../../util/create-object.stub';

import { RepositorioPedido } from 'src/dominio/pedido/puerto/repositorio/repositorio-pedido';
import { DaoPedido } from 'src/dominio/pedido/puerto/dao/dao-pedido';
import { FiltroExcepcionesDeNegocio } from 'src/infraestructura/excepciones/filtro-excepciones-negocio';
import { PedidoControlador } from 'src/infraestructura/pedido/controlador/pedido.controlador';
import { ServicioRegistrarPedido } from 'src/dominio/pedido/servicio/servicio-registrar-pedido';
import { servicioRegistrarPedidoProveedor } from 'src/infraestructura/pedido/proveedor/servicio/servicio-registrar-pedido.proveedor';
import { ManejadorRegistrarPedido } from 'src/aplicacion/pedido/comando/registar-pedido.manejador';
import { ManejadorListarPedido } from 'src/aplicacion/pedido/consulta/listar-pedidos.manejador';
import { ComandoRegistrarPedido } from 'src/aplicacion/pedido/comando/registrar-pedido.comando';
import { AppLogger } from 'src/infraestructura/configuracion/ceiba-logger.service';
import { PedidoDto } from 'src/aplicacion/pedido/consulta/dto/pedido.dto';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';
import { ManejadorListarPedidoProducto } from 'src/aplicacion/pedido-producto/consulta/listar-pedido-productos.manejador';
import { DaoPedidoProducto } from 'src/dominio/pedido-producto/puerto/dao/dao-pedido-producto';
import { PedidoProductoControlador } from 'src/infraestructura/pedido-producto/controlador/pedido-producto.controlador';
import { RepositorioPedidoProducto } from 'src/dominio/pedido-producto/puerto/repositorio/repositorio-pedido-producto';
import { ManejadorRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registar-pedido-producto.manejador';
import { ServicioRegistrarPedidoProducto } from 'src/dominio/pedido-producto/servicio/servicio-registrar-pedido-producto';
import { servicioRegistrarPedidoProductoProveedor } from 'src/infraestructura/pedido-producto/proveedor/servicio/servicio-registrar-pedido-producto.proveedor';

/**
 * Un sandbox es util cuando el módulo de nest se configura una sola vez durante el ciclo completo de pruebas
 * */
const sinonSandbox = createSandbox();

describe('Pruebas al controlador de pedidos', () => {

  let app: INestApplication;
  let repositorioPedido: SinonStubbedInstance<RepositorioPedido>;
  let repositorioPedidoProducto: SinonStubbedInstance<RepositorioPedidoProducto>;
  let daoPedido: SinonStubbedInstance<DaoPedido>;
  let daoPedidoProducto: SinonStubbedInstance<DaoPedidoProducto>;

  /**
   * No Inyectar los módulos completos (Se trae TypeORM y genera lentitud al levantar la prueba, traer una por una las dependencias)
   **/
  beforeAll(async () => {
    repositorioPedido = createStubObj<RepositorioPedido>(['actualizar', 'guardar'], sinonSandbox);
    repositorioPedidoProducto = createStubObj<RepositorioPedidoProducto>(['eliminar', 'guardar'], sinonSandbox);
    daoPedido = createStubObj<DaoPedido>(['buscar', 'listar'], sinonSandbox);
    daoPedidoProducto = createStubObj<DaoPedidoProducto>(['listar','buscar'], sinonSandbox);
    const moduleRef = await Test.createTestingModule({
      controllers: [PedidoControlador, PedidoProductoControlador],
      providers: [
        AppLogger,
        {
          provide: ServicioRegistrarPedido,
          inject: [RepositorioPedido],
          useFactory: servicioRegistrarPedidoProveedor,
        },
        {
          provide: ServicioRegistrarPedidoProducto,
          inject: [RepositorioPedidoProducto],
          useFactory: servicioRegistrarPedidoProductoProveedor,
        },
        { provide: RepositorioPedido, useValue: repositorioPedido },
        { provide: DaoPedido, useValue: daoPedido },
        { provide: RepositorioPedidoProducto, useValue: repositorioPedidoProducto },
        { provide: DaoPedidoProducto, useValue: daoPedidoProducto },
        ManejadorRegistrarPedido,
        ManejadorListarPedido,
        ManejadorListarPedidoProducto,
        ManejadorRegistrarPedidoProducto,
      ],
    }).compile();

    app = moduleRef.createNestApplication();
    const logger = await app.resolve(AppLogger);
    logger.customError = sinonSandbox.stub();
    app.useGlobalFilters(new FiltroExcepcionesDeNegocio(logger));
    await app.init();
  });

  afterEach(() => {
    sinonSandbox.restore();
  });

  afterAll(async () => {
    await app.close();
  });

  it('debe buscar el pedido por ID', () => {

    const cliente = new ClienteDto();
    cliente.nombre = 'Maria Bohorquez',
    cliente.identificacion = '1090495415';
    cliente.telefono = '3042912566';
    cliente.email = 'maria@maria.com';

    const pedido = new PedidoDto();
    pedido.precio = 1500,
    pedido.cliente = cliente;
    pedido.activo = '1';
    pedido.fechaEntrega = '01/10/2021';


    daoPedido.buscar.returns(Promise.resolve(pedido));

    return request(app.getHttpServer())
      .get('/pedidos/' + 1)
      .expect(HttpStatus.OK)
  });

  it('debe registrar un pedido correctamente', async () => {
    const productos = Array <PedidoProducto>()
    productos.push(new PedidoProducto(1, 1, 1, 10, '1'))
    const pedido: ComandoRegistrarPedido = {
      precio: 1500,
      cliente: 1,
      activo: '1',
      fechaEntrega: '01/10/2021',
      productos: productos
    };

    const response = await request(app.getHttpServer())
      .post('/pedidos').send(pedido)
      .expect(HttpStatus.CREATED);
    expect(response.body.precio).toBe(1500);
    expect(response.body.activo).toBe('1');
    expect(response.body.fechaEntrega).toBe('01/10/2021');
  });

  it('debe modificar un pedido correctamente', async () => {
    const productos = Array <PedidoProducto>()
    productos.push(new PedidoProducto(1, 1, 1, 10, '1'))
    const pedido: ComandoRegistrarPedido = {
      precio: 1500,
      cliente: 1,
      activo: '1',
      fechaEntrega: '01/10/2021',
      productos: productos
    };

    const response = await request(app.getHttpServer())
      .put('/pedidos/1').send(pedido)
      .expect(HttpStatus.OK);
    expect(response.body.precio).toBe(1500);
    expect(response.body.activo).toBe('1');
    expect(response.body.fechaEntrega).toBe('01/10/2021');
  });
});
