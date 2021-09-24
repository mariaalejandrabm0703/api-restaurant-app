import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class MigracionProducto1631847402930 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    {
      await queryRunner.createTable(
        new Table({
          name: 'producto',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'descripcion',
              type: 'varchar(50)',
              isNullable: false,
            },
            {
              name: 'categoria',
              type: 'varchar(50)',
              isNullable: false,
            },
            {
              name: 'precio',
              type: 'int',
              isNullable: false,
            },
            {
              name: 'activo',
              type: 'char(1)',
              isNullable: false,
            },
            {
              name: 'fechaCreacion',
              type: 'datetime',
              isNullable: false,
              default: 'now()',
            },
            {
              name: 'img',
              type: 'text',
              isNullable: false,
            },
          ],
        }),
        false,
        true,
        true,
      );
    }
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `producto`', undefined);
  }
}
