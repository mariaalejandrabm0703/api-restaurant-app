import { Cliente } from "src/dominio/cliente/modelo/cliente";
import { PedidoProducto } from "src/dominio/pedido-producto/modelo/pedido-producto";

export class Pedido {
  readonly #precio: number;
  readonly #activo: string;
  readonly #cliente: Cliente;
  readonly #fechaEntrega: string;
  readonly #productos: PedidoProducto[];

  constructor(precio: number, activo: string, cliente: Cliente, fechaEntrega: string, productos: PedidoProducto[]) {
    this.#precio = precio;
    this.#activo = activo;
    this.#cliente = cliente;
    this.#fechaEntrega = fechaEntrega;
    this.#productos = productos;
  }

  get precio(): number {
    return this.#precio;
  }

  get activo(): string {
    return this.#activo;
  }

  get cliente(): Cliente {
    return this.#cliente;
  }

  get fechaEntrega(): string {
    return this.#fechaEntrega;
  }

  get productos(): PedidoProducto[] {
    return this.#productos;
  }
}
