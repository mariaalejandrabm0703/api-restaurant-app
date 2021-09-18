import { ApiProperty } from '@nestjs/swagger';

export class ProductoDto {

  @ApiProperty({ example: 'Pastas' })
  descripcion: string;
  
  @ApiProperty({ example: 'Plato principal' })
  categoria: string;

  @ApiProperty({ example: '500' })
  precio: number;

  @ApiProperty({ example:'1'})
  activo: string;

  @ApiProperty({ example: '01/01/2021' })
  fechaCreacion: Date;
}
