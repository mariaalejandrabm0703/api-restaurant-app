import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigracionCrearProductos1631906459840
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Pastas a la carbonara", "Plato principal", 500, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Ensalada cesar", "Ensaladas", 25, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Crema de pollo", "Sopas", 10, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Cerezada limonada", "Bebidas", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Bondiola", "Plato principal", 350, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Ensalada con salmón", "Ensaladas", 28, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Crema de champiñones", "Sopas", 9, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Sandría", "Bebidas", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Pastas a la bolañesa", "Plato principal", 200, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Ensalada dulce", "Ensaladas", 16, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Crema de tomate", "Sopas", 13, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Jugo natural", "Bebidas", 13, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Limonada natural", "Bebidas", 10, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Roast Beef", "Plato principal", 468, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Ensalada de frutas", "Ensaladas", 20, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Risotto con champiñones", "Plato principal", 659, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Lomo a la mostaza", "Plato principal", 69, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Salmón en salsa holandesa", "Plato principal", 89, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Ceviche", "Entrada", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Camarones fritos", "Entrada", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Mozzarella en carroza", "Entrada", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Champiñones tres quesos", "Entrada", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Arroz caufa de pollo", "Plato principal", 50, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Pollo cubierto en ajonjoli", "Plato principal", 45, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Tarta de chocolate", "Postres", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Tiramisú", "Postres", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Cholado", "Postres", 11, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Crepe de nutela", "Postres", 50, 1,now());',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`) VALUES ("Mousse", "Postres", 45, 1,now());',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `producto`', undefined);
  }
}
