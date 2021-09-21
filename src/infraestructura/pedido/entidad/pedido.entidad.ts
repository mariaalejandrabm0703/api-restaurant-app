import { ClienteEntidad } from 'src/infraestructura/cliente/entidad/cliente.entidad';
import { PedidoProductoEntidad } from 'src/infraestructura/pedido-producto/entidad/pedido-producto.entidad';
import { Column, Entity,  OneToMany,  PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'pedido' })
export class PedidoEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  precio: number;

  @ManyToOne(() => ClienteEntidad, cliente => cliente.id, { cascade: true })
  @JoinColumn({ name: 'cliente' })
  cliente: ClienteEntidad;

  @Column()
  activo: string;

  @Column()
  fechaEntrega: string;

  @OneToMany(()=> PedidoProductoEntidad, (pedidosProductos: PedidoProductoEntidad ) => pedidosProductos.pedido)
  pedidosProductos: Array<PedidoProductoEntidad>;
}
