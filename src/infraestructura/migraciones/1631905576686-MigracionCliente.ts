import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class MigracionCliente1631905576686 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    {
      await queryRunner.createTable(
        new Table({
          name: 'cliente',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'identificacion',
              type: 'varchar(10)',
              isNullable: false,
            },
            {
              name: 'nombre',
              type: 'varchar(50)',
              isNullable: false,
            },
            {
              name: 'phone',
              type: 'varchar(10)',
              isNullable: false,
            },
            {
              name: 'email',
              type: 'varchar(50)',
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
          ],
        }),
        false,
        true,
        true,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `cliente`', undefined);
  }
}
