import { MigrationInterface, QueryRunner } from 'typeorm';

export class MigracionCrearProductos1631906459840
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Pastas a la carbonara", "Plato principal", 500, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pequerecetas.com%2Freceta%2Fespaguetis-carbonara%2F&psig=AOvVaw0IEnkKNFW7ex-iGVAtJq-j&ust=1632580363204000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC08vrpl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada cesar", "Ensaladas", 25, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cocinacaserayfacil.net%2Fensalada-cesar-receta-original%2F&psig=AOvVaw1TJAdI3w_SMMzKivhxDrEe&ust=1632580387647000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCN_oPql_MCFQAAAAAdAAAAABAI");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crema de pollo", "Sopas", 10, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recetavenezolana.com%2Fcrema-de-pollo%2F&psig=AOvVaw1Qjw2YdqJUOMeN0oodLh3j&ust=1632580404926000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjxuozql_MCFQAAAAAdAAAAABAX");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Cerezada limonada", "Bebidas", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffierrosburger.com%2Fes%2Fproductos%2Flimonada-cerezada&psig=AOvVaw3tW1CI3JFxkp0joD-_q7wc&ust=1632580429385000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjY_Jjql_MCFQAAAAAdAAAAABAJ");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Bondiola", "Plato principal", 350, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Felgourmet.com%2Freceta%2Fbondiola-de-cerdo-2&psig=AOvVaw3fARQL2Wj3eDzz7hKoFy_5&ust=1632580448702000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCuxaLql_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada con salmón", "Ensaladas", 28, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recetasgratis.net%2Freceta-de-ensalada-de-salmon-y-pepino-56270.html&psig=AOvVaw1cJ4BEqVG6HG3EHYD4nYas&ust=1632580468706000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNjljK7ql_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crema de champiñones", "Sopas", 9, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpekinrestaurantedecomidachina.com%2Fproducto%2Fcrema-champinones%2F&psig=AOvVaw1YcQsCZK8cojs5YUM1v7C0&ust=1632580490631000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPCYi7bql_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Sandría", "Bebidas", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmx.depositphotos.com%2F67080455%2Fstock-photo-glasses-of-sandria-with-fruits.html&psig=AOvVaw2GUOqH5nXkdvrkbzypBv4u&ust=1632580505802000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDd8b3ql_MCFQAAAAAdAAAAABAf");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Pastas a la bolañesa", "Plato principal", 200, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.laespanolaaceites.com%2Frecetas%2Fespaguetis-a-la-bolonesa%2F&psig=AOvVaw0Q4_SCZzK9GQ6E_fnka9up&ust=1632580559099000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCOC319bql_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada dulce", "Ensaladas", 16, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cocinadelirante.com%2Freceta%2Fpostre%2Freceta-de-coctel-de-frutas-cremoso-sin-azucar&psig=AOvVaw3bfBz5XkHwjs3KCgMUR9Hd&ust=1632580578021000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPD6k-Dql_MCFQAAAAAdAAAAABAJ");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crema de tomate", "Sopas", 13, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Frecetastips.com%2Fcrema-de-tomate%2F&psig=AOvVaw2G9L0CRTk4O7De97fEmkQT&ust=1632580604770000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDShO3ql_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Jugo natural", "Bebidas", 13, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.totalfood.com.ar%2Fes%2Fblog%2Fcomo-preparar-jugos-naturales-seguros&psig=AOvVaw3PumYvNmP6anrUyHZ-wzRu&ust=1632580621532000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJj4mfTql_MCFQAAAAAdAAAAABAT");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Limonada natural", "Bebidas", 10, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cocinatis.com%2Freceta%2Flimonada&psig=AOvVaw2hW3uyVdb3AgL1TSacckqJ&ust=1632580641884000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiztP3ql_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Roast Beef", "Plato principal", 468, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.delish.com%2Fcooking%2Frecipe-ideas%2Fa23584914%2Fperfect-roast-beef-recipe%2F&psig=AOvVaw1mvHQZrkKj7coPY69CGhs-&ust=1632580658441000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDY6Ibrl_MCFQAAAAAdAAAAABAJ");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ensalada de frutas", "Ensaladas", 20, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsuperpola.com%2Frecetas%2Fensalada-de-frutas-con-aderezo-de-miel-y-naranja%2F&psig=AOvVaw1Y-fFGlHh9aY7i04mUCAkk&ust=1632580680221000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIi6kJHrl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Risotto con champiñones", "Plato principal", 659, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.gourmet.cl%2Frecetas%2Frisotto-de-champinones%2F&psig=AOvVaw1Lr7cCbjhphdBR5d9AgnOu&ust=1632580704180000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjxzZvrl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Lomo a la mostaza", "Plato principal", 69, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recetasgratis.net%2Freceta-de-lomo-al-horno-con-salsa-de-mostaza-28253.html&psig=AOvVaw3YBSekGY5uxXB71os0gRIv&ust=1632580720560000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPigicXrl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Salmón en salsa holandesa", "Plato principal", 89, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recetasderechupete.com%2Fsalmon-en-papillote-con-salsa-holandesa%2F13198%2F&psig=AOvVaw2E_av2Rlj3WLWGt4iPzB-q&ust=1632580748840000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPjb3rDrl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Ceviche", "Entrada", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcevicheweb.com%2Fcolombiano%2F&psig=AOvVaw369WcXTvptbzI1sIUehPwl&ust=1632580809505000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjLkc_rl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Camarones fritos", "Entrada", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Frecetinas.com%2Fcamarones-empanizados%2F&psig=AOvVaw1CWEJFYvWAVAS6uT4LP5-L&ust=1632580828289000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjKvdfrl_MCFQAAAAAdAAAAABAJ");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Mozzarella en carroza", "Entrada", 11, 1,now(), "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.recetario-cocina.com%2Freceta%2Fmozzarella-in-carrozza%2F&psig=AOvVaw1j81LMO1rwLHUH-RBVoN-T&ust=1632580846400000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMj59t7rl_MCFQAAAAAdAAAAABAV");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Champiñones tres quesos", "Entrada", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsuperpola.com%2Frecetas%2Fhongos-rellenos-de-tres-quesos%2F&psig=AOvVaw0-j2TzJeU9wExO6fadEaod&ust=1632580881349000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLie7vDrl_MCFQAAAAAdAAAAABAJ");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Arroz caufa de pollo", "Plato principal", 50, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bolivia.com%2Fel-sabor-de-bolivia%2Frecetas-internacionales%2Farroz-chaufa-con-pollo-r750&psig=AOvVaw3Ryp1JrpmEWAtINOiH2UZ4&ust=1632580898743000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKjDgPrrl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Pollo cubierto en ajonjoli", "Plato principal", 45, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Felhornodelucas.com%2Freceta-de%2Fpollo-con-ajonjoli&psig=AOvVaw2n_0OXz58C4xvuFtJuvaPo&ust=1632580917341000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIi0s4Psl_MCFQAAAAAdAAAAABAV");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Tarta de chocolate", "Postres", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fokdiario.com%2Frecetas%2Fmejores-recetas-tartas-chocolate-1745074&psig=AOvVaw3LXVABEGZOe-nUAYR_yeln&ust=1632580953544000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJi78ZLsl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Tiramisú", "Postres", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fvinomanos.com%2F2021%2F02%2Freceta-de-tiramisu%2F&psig=AOvVaw10GvtSHbyvhlxD4TcXlJdA&ust=1632580967048000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiy_Jjsl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Cholado", "Postres", 11, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.recetasnestle.com.co%2Frecetas%2Fcholado&psig=AOvVaw3IDRwiLqPimOIW15iwEBnR&ust=1632580978771000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMjSvZ_sl_MCFQAAAAAdAAAAABAD");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Crepe de nutela", "Postres", 50, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oetker.es%2Fes-es%2Fnuestras-recetas%2Fr%2Fcrepes-con-nutella-y-frutos-rojos&psig=AOvVaw1x-xSYl-Sb1vRcHgqGKTta&ust=1632580996343000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKier6bsl_MCFQAAAAAdAAAAABAJ");',
    );
    await queryRunner.query(
      'INSERT INTO `restaurant`.`producto`(`descripcion`,`categoria`,`precio`, `activo`, `fechaCreacion`, `img`) VALUES ("Mousse", "Postres", 45, 1,now(), "https://www.google.com/url?sa=i&url=https%3A%2F%2Firecetasfaciles.com%2Fmousse-de-chocolate-exquisito-y-sencillo%2F&psig=AOvVaw25Yie-xBV-Soovv7ODR_Sc&ust=1632581009715000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNCUgrDsl_MCFQAAAAAdAAAAABAD");',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `producto`', undefined);
  }
}
