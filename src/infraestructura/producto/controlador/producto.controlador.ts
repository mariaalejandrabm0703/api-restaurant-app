import {  Controller, Get } from '@nestjs/common';
import { ManejadorListarProducto } from 'src/aplicacion/producto/consulta/list-producto.manejador';
import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';

@Controller('productos')
export class ProductoControlador {
  constructor(
    private readonly _manejadorListarProducto: ManejadorListarProducto,
  ) {}

  @Get()
  async listar(): Promise<ProductoDto[]> {
    return this._manejadorListarProducto.ejecutar();
  }

  @Get('/masvendidos')
  async listarProductosVendidos(): Promise<ProductoDto[]> {
    return this._manejadorListarProducto.listarProductosVendidos();
  }
}
