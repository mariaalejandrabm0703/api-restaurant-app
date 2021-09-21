import { PedidoProductoEntidad } from 'src/infraestructura/pedido-producto/entidad/pedido-producto.entidad';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';

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

  @OneToMany(()=> PedidoProductoEntidad, (pedidosProductos: PedidoProductoEntidad ) => pedidosProductos.producto)
  pedidosProductos: Array<PedidoProductoEntidad>;
}
