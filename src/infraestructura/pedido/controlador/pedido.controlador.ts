import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ComandoRegistrarPedido } from 'src/aplicacion/pedido/comando/registrar-pedido.comando';
import { ManejadorRegistrarPedido } from 'src/aplicacion/pedido/comando/registar-pedido.manejador';
import { ManejadorListarPedido } from 'src/aplicacion/pedido/consulta/listar-pedidos.manejador';
import { PedidoDto } from 'src/aplicacion/pedido/consulta/dto/pedido.dto';

@Controller('pedidos')
export class PedidoControlador {
  constructor(
    private readonly _manejadorRegistrarPedido: ManejadorRegistrarPedido,
    private readonly _manejadorListarPedido: ManejadorListarPedido,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarPedido: ComandoRegistrarPedido) {
    await this._manejadorRegistrarPedido.ejecutar(comandoRegistrarPedido);
  }

  @Get()
  async listar(): Promise<PedidoDto[]> {
    return this._manejadorListarPedido.ejecutar();
  }
}
