import { PedidoProductoEntidad } from 'src/infraestructura/pedido-producto/entidad/pedido-producto.entidad';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'producto' })
export class ProductoEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descripcion: string;

  @Column()
  categoria: string;

  @Column()
  precio: number;

  @Column()
  activo: string;

  // @OneToMany(()=> PedidoProductoEntidad, producto => producto.idProducto)
  // pedidos: PedidoProductoEntidad[];
}
