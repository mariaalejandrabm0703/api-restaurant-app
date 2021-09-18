import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  fechaCreacion: Date;
}
