import {  IsOptional, IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Cliente } from 'src/dominio/cliente/modelo/cliente';
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';

export class ComandoRegistrarPedido {
 
  @ApiProperty({ example: 500})
  public precio: number;

  @IsString()
  @ApiProperty()
  public cliente: Cliente;

  @IsString()
  @ApiProperty({ example: '1' })
  public activo: string;

  @IsString()
  @ApiProperty({ example: '01/01/2021' })
  public fechaEntrega: string;

  @IsOptional()
  @IsArray()
  public productos: PedidoProducto[];
}
