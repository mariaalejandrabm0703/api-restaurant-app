import {  IsString, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarPedido {
 
  @ApiProperty({ example: 500})
  public precio: number;

  @IsString()
  @ApiProperty({ example: '1' })
  public idCliente: string;

  @IsString()
  @ApiProperty({ example: '1' })
  public activo: string;

  @IsString()
  @ApiProperty({ example: '01/01/2021' })
  public fechaEntrega: string;

  @IsArray()
  public productos: [{
    idProducto: number,
    cantidad: number,
    precio: number
  }]
}
