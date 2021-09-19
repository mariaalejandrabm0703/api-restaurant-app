import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ComandoRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registrar-pedido-producto.comando';
import { ManejadorRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registar-pedido-producto.manejador';
import { ManejadorListarPedidoProducto } from 'src/aplicacion/pedido-producto/consulta/listar-pedido-productos.manejador';
import { PedidoProductoDto } from 'src/aplicacion/pedido-producto/consulta/dto/pedido-producto.dto';

@Controller('pedidoProductos')
export class PedidoProductoControlador {
  constructor(
    private readonly _manejadorRegistrarPedidoProducto: ManejadorRegistrarPedidoProducto,
    private readonly _manejadorListarPedidoProducto: ManejadorListarPedidoProducto,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarPedidoProducto: ComandoRegistrarPedidoProducto) {
    await this._manejadorRegistrarPedidoProducto.ejecutar(comandoRegistrarPedidoProducto);
  }

  @Get()
  async listar(): Promise<PedidoProductoDto[]> {
    return this._manejadorListarPedidoProducto.ejecutar();
  }
}
