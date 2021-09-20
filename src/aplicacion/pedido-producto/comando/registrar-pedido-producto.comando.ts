import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';
import { Producto } from 'src/dominio/producto/modelo/producto';

export class ComandoRegistrarPedidoProducto {
  @IsNumber()
  @ApiProperty()
  public pedido: Pedido;

  @IsNumber()
  @ApiProperty()
  public producto: Producto;

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
