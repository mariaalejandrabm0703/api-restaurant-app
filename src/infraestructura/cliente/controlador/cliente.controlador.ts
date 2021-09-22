import { Body, Controller, Get, Post, UsePipes, ValidationPipe, Param } from '@nestjs/common';
import { ComandoRegistrarCliente } from 'src/aplicacion/cliente/comando/registrar-cliente.comando';
import { ManejadorRegistrarCliente } from 'src/aplicacion/cliente/comando/registar-cliente.manejador';
import { ManejadorListarCliente } from 'src/aplicacion/cliente/consulta/listar-clientes.manejador';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';

@Controller('clientes')
export class ClienteControlador {
  constructor(
    private readonly _manejadorRegistrarCliente: ManejadorRegistrarCliente,
    private readonly _manejadorListarCliente: ManejadorListarCliente,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarCliente: ComandoRegistrarCliente): Promise <number> {
   return this._manejadorRegistrarCliente.ejecutar(comandoRegistrarCliente);
  }

  @Get(':id')
  async buscarCliente(@Param() params): Promise<ClienteDto> {
    return this._manejadorListarCliente.buscar(params.id);
  }

}
