import { Pedido } from "src/dominio/pedido/modelo/pedido";
import { Producto } from "src/dominio/producto/modelo/producto";

export class PedidoProducto {
  readonly #pedido: Pedido;
  readonly #producto: Producto;
  readonly #cantidad: number;
  readonly #precio: number;
  readonly #activo: string;

  constructor(pedido: Pedido, producto: Producto, cantidad: number, precio: number, activo: string) {
    this.#pedido = pedido;
    this.#producto = producto;
    this.#cantidad = cantidad;
    this.#precio = precio;
    this.#activo = activo;
  }

  get pedido(): Pedido {
    return this.#pedido;
  }

  get producto(): Producto {
    return this.#producto;
  }

  get cantidad(): number {
    return this.#cantidad;
  }

  get precio(): number {
    return this.#precio;
  }

  get activo(): string {
    return this.#activo;
  }
  
}
