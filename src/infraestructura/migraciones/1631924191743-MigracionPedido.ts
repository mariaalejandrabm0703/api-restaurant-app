import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class MigracionRequest1631924191743 implements MigrationInterface {
  name = 'MigracionRequest1631924191743';

  public async up(queryRunner: QueryRunner): Promise<void> {
    {
      await queryRunner.createTable(
        new Table({
          name: 'pedido',
          columns: [
            {
              name: 'id',
              type: 'int',
              isPrimary: true,
              isGenerated: true,
              generationStrategy: 'increment',
            },
            {
              name: 'idCliente',
              type: 'int',
              isNullable: false,
            },
            {
              name: 'activo',
              type: 'char(1)',
              isNullable: false,
            },
            {
              name: 'precio',
              type: 'int',
              isNullable: false,
            },
            {
              name: 'fechaCreacion',
              type: 'datetime',
              isNullable: false,
              default: 'now()',
            },            
            {
              name: 'fechaEntrega',
              type: 'varchar(20)',
              isNullable: false,
            },
          ],
        }),
        false,
        true,
        true,
      );
    }
    const foreignKey = new TableForeignKey({
        columnNames: ["idCliente"],
        referencedColumnNames: ["id"],
        referencedTableName: "cliente",
        onDelete: "CASCADE"
    });
    await queryRunner.createForeignKey("pedido", foreignKey)
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `pedido`', undefined);
  }
}
