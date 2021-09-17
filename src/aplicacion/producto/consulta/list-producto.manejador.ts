import { Injectable } from '@nestjs/common';

import { DaoProducto } from 'src/dominio/producto/puerto/dao/dao-producto';
import { ProductoDto } from 'src/aplicacion/producto/consulta/dto/producto.dto';

@Injectable()
export class ManejadorListarProducto {
  constructor(private _daoproducto: DaoProducto) {}

  async ejecutar(): Promise<ProductoDto[]> {
    return this._daoproducto.listar();
  }
}
