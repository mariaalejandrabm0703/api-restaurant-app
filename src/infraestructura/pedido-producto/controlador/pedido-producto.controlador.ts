import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ComandoRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registrar-pedido-producto.comando';
import { ManejadorRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registar-pedido-producto.manejador';
import { ManejadorListarPedidoProducto } from 'src/aplicacion/pedido-producto/consulta/listar-pedido-productos.manejador';
import { PedidoProductoDto } from 'src/aplicacion/pedido-producto/consulta/dto/pedido-producto.dto';

@Controller('pedidoProductos')
export class PedidoProductoControlador {
  constructor(
    private readonly _manejadorRegistrarUsuario: ManejadorRegistrarPedidoProducto,
    private readonly _manejadorListarUsuario: ManejadorListarPedidoProducto,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarUsuario: ComandoRegistrarPedidoProducto) {
    await this._manejadorRegistrarUsuario.ejecutar(comandoRegistrarUsuario);
  }

  @Get()
  async listar(): Promise<PedidoProductoDto[]> {
    return this._manejadorListarUsuario.ejecutar();
  }
}
