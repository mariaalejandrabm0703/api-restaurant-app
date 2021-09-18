import { ApiProperty } from '@nestjs/swagger';

export class PedidoProductoDto {

  @ApiProperty({ example: 1325 })
  idPedido: number;

  @ApiProperty({ example: 1325 })
  idProducto: number;

  @ApiProperty({ example: 10 })
  cantidad: number;

  @ApiProperty({ example: 10 })
  precio: number;

  @ApiProperty({ example: '1' })
  activo: string;

  @ApiProperty({ type: Date })
  fechaCreacion: string;
}
