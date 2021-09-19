import { ApiProperty } from '@nestjs/swagger';

export class PedidoDto {

  @ApiProperty({ example: 500 })
  precio: number;

  @ApiProperty({ example: '1' })
  idCliente: string;

  @ApiProperty({ example: '1' })
  activo: string;
}
