import { IsDateString, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ComandoRegistrarCliente {
  @IsString()
  @ApiProperty({ example: 'William'})
  public nombre: string;

  @IsString()
  @ApiProperty({ minLength: 4, example: '1234' })
  public identificacion: string;

  @IsString()
  @ApiProperty({ minLength: 4, example: '1234' })
  public telefono: string;


  @IsString()
  @ApiProperty({ minLength: 50, example: 'algo@algo.com' })
  public email: string;


  @IsString()
  @ApiProperty({ minLength: 1, example: '1' })
  public activo: string;

  @IsDateString()
  @ApiProperty({ type: Date })
  public fechaCreacion: string;
}
