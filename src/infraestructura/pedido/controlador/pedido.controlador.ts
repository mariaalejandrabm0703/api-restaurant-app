import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ComandoRegistrarPedido } from 'src/aplicacion/pedido/comando/registrar-pedido.comando';
import { ManejadorRegistrarPedido } from 'src/aplicacion/pedido/comando/registar-pedido.manejador';
import { ManejadorListarPedido } from 'src/aplicacion/pedido/consulta/listar-pedidos.manejador';
import { PedidoDto } from 'src/aplicacion/pedido/consulta/dto/pedido.dto';
import { ManejadorRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registar-pedido-producto.manejador';
import { ComandoRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registrar-pedido-producto.comando';

@Controller('pedidos')
export class PedidoControlador {
  constructor(
    private readonly _manejadorRegistrarPedido: ManejadorRegistrarPedido,
    private readonly _manejadorListarPedido: ManejadorListarPedido,
    private readonly _manejadorRegistrarPedidoProducto: ManejadorRegistrarPedidoProducto,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(@Body() comandoRegistrarPedido: ComandoRegistrarPedido): Promise<number> {

    const idPedido = await this._manejadorRegistrarPedido.ejecutar(comandoRegistrarPedido);
    for (let index = 0; index < comandoRegistrarPedido.productos.length; index++) {
      const element = comandoRegistrarPedido.productos[index];
      
      const prod = new ComandoRegistrarPedidoProducto();
      prod.idPedido = idPedido;
      prod.idProducto = element.idProducto;
      prod.cantidad = element.cantidad;
      prod.precio = element.precio;
      prod.activo = '1';

      await this._manejadorRegistrarPedidoProducto.ejecutar(prod);
    }
    return idPedido;
  }

  // @Get()
  // async listar(): Promise<PedidoDto[]> {
  //   return this._manejadorListarPedido.ejecutar();
  // }
}
