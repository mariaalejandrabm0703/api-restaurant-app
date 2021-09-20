import { ApiProperty } from '@nestjs/swagger';

export class PedidoDto {

  @ApiProperty({ example: 500 })
  precio: number;

  @ApiProperty({ example: '1' })
  idCliente: string;

  @ApiProperty({ example: '1' })
  activo: string;

  @ApiProperty({ example: '01/01/2021' })
  fechaEntrega: string;
}
