import { PedidoEntidad } from 'src/infraestructura/pedido/entidad/pedido.entidad';
import { ProductoEntidad } from 'src/infraestructura/producto/entidad/producto.entidad';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'pedido_producto' })
export class PedidoProductoEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PedidoEntidad, (pedido: PedidoEntidad) => pedido.pedidosProductos)
  @JoinColumn({ name: 'pedidoId' })
  pedido: PedidoEntidad;

  @ManyToOne(() => ProductoEntidad,(producto: ProductoEntidad) => producto.pedidosProductos)
  @JoinColumn({ name: 'productoId' })
  producto: ProductoEntidad;

  @Column({ name: 'cantidad' })
  cantidad: number;

  @Column({ name: 'precio' })
  precio: number;

  @Column({ name: 'activo' })
  activo: string;
}
