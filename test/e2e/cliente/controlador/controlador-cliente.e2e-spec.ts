import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { createSandbox, SinonStubbedInstance } from 'sinon';
import { createStubObj } from '../../../util/create-object.stub';

import { RepositorioCliente } from 'src/dominio/cliente/puerto/repositorio/repositorio-cliente';
import { DaoCliente } from 'src/dominio/cliente/puerto/dao/dao-cliente';
import { FiltroExcepcionesDeNegocio } from 'src/infraestructura/excepciones/filtro-excepciones-negocio';
import { ClienteControlador } from 'src/infraestructura/cliente/controlador/cliente.controlador';
import { ServicioRegistrarCliente } from 'src/dominio/cliente/servicio/servicio-registrar-cliente';
import { servicioRegistrarClienteProveedor } from 'src/infraestructura/cliente/proveedor/servicio/servicio-registrar-cliente.proveedor';
import { ManejadorRegistrarCliente } from 'src/aplicacion/cliente/comando/registar-cliente.manejador';
import { ManejadorListarCliente } from 'src/aplicacion/cliente/consulta/listar-clientes.manejador';
import { ComandoRegistrarCliente } from 'src/aplicacion/cliente/comando/registrar-cliente.comando';
import { AppLogger } from 'src/infraestructura/configuracion/ceiba-logger.service';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';

/**
 * Un sandbox es util cuando el módulo de nest se configura una sola vez durante el ciclo completo de pruebas
 * */
const sinonSandbox = createSandbox();

describe('Pruebas al controlador de clientes', () => {
  let app: INestApplication;
  let repositorioCliente: SinonStubbedInstance<RepositorioCliente>;
  let daoCliente: SinonStubbedInstance<DaoCliente>;

  /**
   * No Inyectar los módulos completos (Se trae TypeORM y genera lentitud al levantar la prueba, traer una por una las dependencias)
   **/
  beforeAll(async () => {
    repositorioCliente = createStubObj<RepositorioCliente>(
      ['existeNombreCliente', 'guardar'],
      sinonSandbox,
    );
    daoCliente = createStubObj<DaoCliente>(['buscar'], sinonSandbox);
    const moduleRef = await Test.createTestingModule({
      controllers: [ClienteControlador],
      providers: [
        AppLogger,
        {
          provide: ServicioRegistrarCliente,
          inject: [RepositorioCliente],
          useFactory: servicioRegistrarClienteProveedor,
        },
        { provide: RepositorioCliente, useValue: repositorioCliente },
        { provide: DaoCliente, useValue: daoCliente },
        ManejadorRegistrarCliente,
        ManejadorListarCliente,
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

  it('debería encontrar el cliente registrado', () => {
    const cliente = new ClienteDto();
    cliente.nombre = 'Maria Bohorquez',
    cliente.identificacion = '1090495415';
    cliente.telefono = '3042912566';
    cliente.email = 'maria@maria.com';

    daoCliente.buscar.returns(Promise.resolve(cliente));

    return request(app.getHttpServer())
      .get('/clientes/' + 1)
      .expect(HttpStatus.OK)
  });

  it('debería registar un cliente correctamente', async () => {
    const cliente: ComandoRegistrarCliente = {
      nombre: 'Maria Bohorquez',
      identificacion: '1090495415',
      telefono: '3042912566',
      email: 'maria@maria.com',
      activo: '1',
      pedidos: [],
    };
    const response = await request(app.getHttpServer())
      .post('/clientes')
      .send(cliente)
      .expect(HttpStatus.CREATED);
    expect(response.body.message).toBe(undefined);
  });

  it('debería fallar al registar un cliente ya existente', async () => {
    const cliente: ComandoRegistrarCliente = {
      nombre: 'Maria Bohorquez',
      identificacion: '1090495415',
      telefono: '3042912566',
      email: 'maria@maria.com',
      activo: '1',
      pedidos: [],
    };
    const mensaje = `El usuario ${cliente.nombre} ya existe`;
    repositorioCliente.existeNombreCliente.returns(Promise.resolve(true));

    const response = await request(app.getHttpServer())
      .post('/clientes')
      .send(cliente)
      .expect(HttpStatus.BAD_REQUEST);
    expect(response.body.message).toBe(mensaje);
    expect(response.body.statusCode).toBe(HttpStatus.BAD_REQUEST);
  });
});
