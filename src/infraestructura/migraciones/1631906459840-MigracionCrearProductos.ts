import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigracionCrearProductos1631906459840
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Pastas a la carbonara", "Plato principal", 500, 1,now(), "https://www.pequerecetas.com/wp-content/uploads/2010/10/espaguetis-carbonara1.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada cesar", "Ensaladas", 25, 1,now(), "https://cdn.colombia.com/gastronomia/2011/08/19/ensalada-cesar-3403.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crema de pollo", "Sopas", 10, 1,now(), "https://d1kxxrc2vqy8oa.cloudfront.net/wp-content/uploads/2020/04/09185629/RFB-1003-2-cremadepollo.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Cerezada limonada", "Bebidas", 11, 1,now(), "https://i.ytimg.com/vi/MDApY9HuvZA/maxresdefault.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Bondiola", "Plato principal", 350, 1,now(), "https://elgourmet.s3.amazonaws.com/recetas/cover/bondi_WV2YC6bQEuTpRmkF79rBAKHZhzoa4v.png");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada con salmón", "Ensaladas", 28, 1,now(), "https://t1.rg.ltmcdn.com/es/images/0/7/2/img_ensalada_de_salmon_y_pepino_56270_600.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crema de champiñones", "Sopas", 9, 1,now(), "https://pekinrestaurantedecomidachina.com/wp-content/uploads/2020/10/crema-de-champinones.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Sangria", "Bebidas", 11, 1,now(), "https://i.blogs.es/29e3eb/sangria-20dap/450_1000.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Pastas a la bolañesa", "Plato principal", 200, 1,now(), "https://www.unileverfoodsolutions.com.co/dam/global-ufs/mcos/nola/colombia/calcmenu/recipes/CO-recipes/pasta-dishes/pasta-en-salsa-bolognesa/main-header.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada dulce", "Ensaladas", 16, 1,now(), "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/ensaladadefrutasestilopinacolada.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crema de tomate", "Sopas", 13, 1,now(), "https://cdn.colombia.com/gastronomia/2011/08/09/crema-de-tomate-3696.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Jugo natural", "Bebidas", 13, 1,now(), "https://cafamfloresta.com.co/wp-content/uploads/2021/01/JUGOLECHE.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Limonada natural", "Bebidas", 10, 1,now(), "https://cdn5.recetasdeescandalo.com/wp-content/uploads/2017/08/Limonada-casera-y-natural-la-receta-mas-facil-y-refrescante.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Roast Beef", "Plato principal", 468, 1,now(), "https://hips.hearstapps.com/hmg-prod/images/delish-roast-beef-horizontal-1540505165.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada de frutas", "Ensaladas", 20, 1,now(), "https://img.vixdata.io/pd/jpg-large/es/sites/default/files/s/receta-de-ensalada-de-frutas.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Risotto con champiñones", "Plato principal", 659, 1,now(), "https://recetarisotto.es/img/risotto-de-champinones-450.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Lomo a la mostaza", "Plato principal", 69, 1,now(), "https://unareceta.com/wp-content/uploads/2018/04/receta-de-lomo-al-horno-con-mostaza.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Salmón en salsa holandesa", "Plato principal", 89, 1,now(), "https://www.recetasderechupete.com/wp-content/uploads/2015/05/salmon_papillote_salsa_holandesa.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ceviche", "Entrada", 11, 1,now(), "https://santa-priscila.com/wp-content/uploads/2020/05/Santa-Priscila_Ceviche-de-Cubos-de-Tilapia.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Camarones fritos", "Entrada", 11, 1,now(), "https://t1.rg.ltmcdn.com/es/images/7/7/4/camarones_empanizados_fritos_37477_600_square.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Mozzarella en carroza", "Entrada", 11, 1,now(), "https://okdiario.com/img/recetas/2017/09/17/mozzare-en-carroza.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Champiñones tres quesos", "Entrada", 11, 1,now(), "https://superpola.com//site/assets/files/1728569/hongos_rellenos_de_tres_quesos.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Arroz caufa de pollo", "Plato principal", 50, 1,now(), "https://www.recetips.com/uploads/recetas_4646c629af8d5db54fbe709f06a86fa8.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Pollo cubierto en ajonjoli", "Plato principal", 45, 1,now(), "https://recetasxacompartir.files.wordpress.com/2015/01/pollo-con-ajonjoli.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Tarta de chocolate", "Postres", 11, 1,now(), "https://okdiario.com/img/2019/01/27/dia-mundial-de-la-tarta-de-chocolate.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Tiramisú", "Postres", 11, 1,now(), "https://www.recetasderechupete.com/wp-content/uploads/2020/05/Tiramis%C3%BA-italiano.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Cholado", "Postres", 11, 1,now(), "https://www.dinays.co/wp-content/uploads/2018/05/2cholado-especial-dinays-fruteria-y-heladeria-en-cali-dinays-final.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crepe de nutela", "Postres", 50, 1,now(), "https://annaspasteleria.com/images/2019post/_videoCover/IMG_7029editweb.jpg");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Mousse", "Postres", 45, 1,now(), "https://cdn7.kiwilimon.com/recetaimagen/30143/640x426/th5-640x426-32553.jpg.webp");',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `producto`', undefined);
  }
}
