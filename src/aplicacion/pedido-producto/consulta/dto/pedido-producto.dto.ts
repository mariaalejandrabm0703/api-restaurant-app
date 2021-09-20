import { ApiProperty } from '@nestjs/swagger';
import { PedidoDto } from 'src/aplicacion/pedido/consulta/dto/pedido.dto';
import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';

export class PedidoProductoDto {

  @ApiProperty()
  pedido: PedidoDto;

  @ApiProperty()
  producto: ProductoDto;

  @ApiProperty({ example: 10 })
  cantidad: number;

  @ApiProperty({ example: 10 })
  precio: number;

  @ApiProperty({ example: '1' })
  activo: string;
}
