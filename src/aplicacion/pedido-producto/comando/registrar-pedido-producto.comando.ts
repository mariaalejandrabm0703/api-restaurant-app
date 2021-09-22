import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarPedidoProducto {
  @IsNumber()
  @ApiProperty()
  public pedido: number;

  @IsNumber()
  @ApiProperty()
  public producto: number;

  @IsNumber()
  @ApiProperty({ example: 10})
  public cantidad: number;

  @IsNumber()
  @ApiProperty({ example: 100})
  public precio: number;

  @IsString()
  @ApiProperty({example: '1' })
  public activo: string;
}
