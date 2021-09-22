import { Cliente } from 'src/dominio/cliente/modelo/cliente';
import { Pedido } from 'src/dominio/pedido/modelo/pedido';
export default class ClienteBuilder
{
      // This approach allows easy modification of test values
    // Another approach would just have a static method returning ClienteDTO
    public ClienteBuilderWithValues()
    {
        const _entity = new Cliente('Maria', '1090495415', '3042912566','maria@maria.com', '1', Array <Pedido>());
  
        return _entity;
    }
}