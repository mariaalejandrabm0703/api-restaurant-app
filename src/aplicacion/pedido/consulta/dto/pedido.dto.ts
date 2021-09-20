import { ApiProperty } from '@nestjs/swagger';
import { ClienteDto } from 'src/aplicacion/cliente/consulta/dto/cliente.dto';

export class PedidoDto {

  @ApiProperty({ example: 500 })
  precio: number;

  @ApiProperty()
  cliente: ClienteDto;

  @ApiProperty({ example: '1' })
  activo: string;

  @ApiProperty({ example: '01/01/2021' })
  fechaEntrega: string;
}
