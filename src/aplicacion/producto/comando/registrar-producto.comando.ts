import { IsOptional, IsArray, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PedidoProducto } from 'src/dominio/pedido-producto/modelo/pedido-producto';

export class ComandoRegistrarProducto {
  @IsString()
  @ApiProperty({ example: 'Pastas'})
  public descripcion: string;

  @IsString()
  @ApiProperty({ example: 'Plato principal' })
  public categoria: string;

  @IsNumber()
  @ApiProperty({ example: 100})
  public precio: number;

  @IsString()
  @ApiProperty({ example: '1' })
  public activo: string;

  @IsOptional()
  @IsArray()
  public productos: PedidoProducto[];
}
