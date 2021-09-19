import { PedidoEntidad } from 'src/infraestructura/pedido/entidad/pedido.entidad';
import { ProductoEntidad } from 'src/infraestructura/producto/entidad/producto.entidad';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'pedido_producto' })
export class PedidoProductoEntidad {
  @PrimaryGeneratedColumn()
  id: number;
  
  // @ManyToOne(() => PedidoEntidad, pedido => pedido.productos)
  @Column()
  idPedido: number;

  // @ManyToOne(() => ProductoEntidad, producto => producto.pedidos)
  @Column()
  idProducto: number;

  @Column()
  cantidad: number;

  @Column()
  precio: number;

  @Column()
  activo: string;
}
