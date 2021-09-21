import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class MigracionPedidoProducto1631964945935 implements MigrationInterface {
    name = 'MigracionPedidoProducto1631964945935'

    public async up(queryRunner: QueryRunner): Promise<void> {
        {
            await queryRunner.createTable(
              new Table({
                name: 'pedido_producto',
                columns: [
                  {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                  },
                  {
                    name: 'pedidoId',
                    type: 'int',
                    isNullable: false,
                  },
                  {
                    name: 'productoId',
                    type: 'int',
                    isNullable: false,
                  },
                  {
                    name: 'cantidad',
                    type: 'int',
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
                ],
              }),
              false,
              true,
              true,
            );
          }
          const foreignKey = new TableForeignKey({
              columnNames: ["pedidoId"],
              referencedColumnNames: ["id"],
              referencedTableName: "pedido",
              onDelete: "CASCADE"
          });
          await queryRunner.createForeignKey("pedido_producto", foreignKey)

          const foreignKey2 = new TableForeignKey({
            columnNames: ["productoId"],
            referencedColumnNames: ["id"],
            referencedTableName: "producto",
            onDelete: "CASCADE"
        });
        await queryRunner.createForeignKey("pedido_producto", foreignKey2)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE `pedido_producto`', undefined);
    }

}
