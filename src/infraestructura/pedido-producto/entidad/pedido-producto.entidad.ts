import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'pedido_producto' })
export class PedidoProductoEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idPedido: number;

  @Column()
  idProducto: number;

  @Column()
  cantidad: number;

  @Column()
  precio: number;

  @Column()
  activo: string;

  @Column()
  fechaCreacion: Date;
}
