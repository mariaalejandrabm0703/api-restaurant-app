import { IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarCliente {
  @IsString()
  @ApiProperty({ example: 'William'})
  public nombre: string;

  @IsString()
  @ApiProperty({ example: '1234' })
  public identificacion: string;

  @IsString()
  @ApiProperty({ example: '1234' })
  public telefono: string;


  @IsString()
  @ApiProperty({example: 'algo@algo.com' })
  public email: string;


  @IsString()
  @ApiProperty({ example: '1' })
  public activo: string;
}
