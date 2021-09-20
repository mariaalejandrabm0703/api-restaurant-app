import { PedidoProductoEntidad } from 'src/infraestructura/pedido-producto/entidad/pedido-producto.entidad';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pedido' })
export class PedidoEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  precio: number;

  @Column()
  idCliente: string;

  @Column()
  activo: string;

  @Column()
  fechaEntrega: string;

  // @OneToMany(()=> PedidoProductoEntidad, producto => producto.idPedido)
  // productos: PedidoProductoEntidad[];
}
