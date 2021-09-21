import { PedidoEntidad } from 'src/infraestructura/pedido/entidad/pedido.entidad';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity({ name: 'cliente' })
export class ClienteEntidad {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  identificacion: string;

  @Column()
  telefono: string;

  @Column()
  email: string;

  @Column()
  activo: string;

  @OneToMany(() => PedidoEntidad, pedido => pedido.cliente)
  pedidos: PedidoEntidad[];
}
