import { ApiProperty } from '@nestjs/swagger';

export class ClienteDto {

  @ApiProperty({ example: 'William' })
  nombre: string;

  @ApiProperty({ example: '10504646' })
  identificacion: string;

  @ApiProperty({ example: '30416942' })
  telefono: string;

  @ApiProperty({ example: 'algo@algo.com' })
  email: string;

  @ApiProperty({ type: Date })
  fechaCreacion: string;
}
