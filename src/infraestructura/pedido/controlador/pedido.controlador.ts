import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  Param,
  Put,
} from '@nestjs/common';
import { ComandoRegistrarPedido } from 'src/aplicacion/pedido/comando/registrar-pedido.comando';
import { ManejadorRegistrarPedido } from 'src/aplicacion/pedido/comando/registar-pedido.manejador';
import { ManejadorListarPedido } from 'src/aplicacion/pedido/consulta/listar-pedidos.manejador';
import { ManejadorRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registar-pedido-producto.manejador';
import { ComandoRegistrarPedidoProducto } from 'src/aplicacion/pedido-producto/comando/registrar-pedido-producto.comando';
import { ManejadorListarPedidoProducto } from 'src/aplicacion/pedido-producto/consulta/listar-pedido-productos.manejador';

@Controller('pedidos')
export class PedidoControlador {
  constructor(
    private readonly _manejadorRegistrarPedido: ManejadorRegistrarPedido,
    private readonly _manejadorListarPedido: ManejadorListarPedido,
    private readonly _manejadorListarPedidoProducto: ManejadorListarPedidoProducto,
    private readonly _manejadorRegistrarPedidoProducto: ManejadorRegistrarPedidoProducto,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async crear(
    @Body() comandoRegistrarPedido: ComandoRegistrarPedido,
  ): Promise<number> {
    // se registra el nuevo pedido
    const idPedido = await this._manejadorRegistrarPedido.ejecutar(
      comandoRegistrarPedido,
    );
    for (
      let index = 0;
      index < comandoRegistrarPedido.productos.length;
      index++
    ) {
      const element = comandoRegistrarPedido.productos[index];

      const prod = new ComandoRegistrarPedidoProducto();
      prod.idPedido = idPedido;
      prod.idProducto = element.idProducto;
      prod.cantidad = element.cantidad;
      prod.precio = element.precio;
      prod.activo = '1';

      // se adicionan los productos al pedido
      await this._manejadorRegistrarPedidoProducto.ejecutar(prod);
    }
    return idPedido;
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async modificar(
    @Param() params,
    @Body() comandoRegistrarPedido: ComandoRegistrarPedido,
  ) {
    // se valida existencia del pedido
    const pedido = await this._manejadorListarPedido.buscar(params.id);

    if (pedido) {
      // eliminar los productos
      await this._manejadorRegistrarPedidoProducto.eliminar(params.id);

      // actualiza informacion del pedido
      await this._manejadorRegistrarPedido.actualizar(
        params.id,
        comandoRegistrarPedido,
      );

      if (comandoRegistrarPedido.activo === '1') {
        // adicionar los nuevos productos
        for (
          let index = 0;
          index < comandoRegistrarPedido.productos.length;
          index++
        ) {
          const element = comandoRegistrarPedido.productos[index];

          const prod = new ComandoRegistrarPedidoProducto();
          prod.idPedido = params.id;
          prod.idProducto = element.idProducto;
          prod.cantidad = element.cantidad;
          prod.precio = element.precio;
          prod.activo = '1';

          await this._manejadorRegistrarPedidoProducto.ejecutar(prod);
        }
      }
    } else {
      return {
        mensaje: 'No se encontró pedido.',
      };
    }
    return comandoRegistrarPedido;
  }

  @Get(':id')
  async buscarPedido(@Param() params): Promise<any> {
    // se busca el pedido
    const pedido = await this._manejadorListarPedido.buscar(params.id);

    // se buscan los productos
    const productos = await this._manejadorListarPedidoProducto.buscar(
      params.id,
    );

    // se forma la respuesta
    const response = {
      pedido: pedido,
      productos: productos,
    };

    return response;
  }
}
