export class PedidoProducto {
  readonly #pedido: number;
  readonly #producto: number;
  readonly #cantidad: number;
  readonly #precio: number;
  readonly #activo: string;

  constructor(pedido: number, producto: number, cantidad: number, precio: number, activo: string) {
    this.#pedido = pedido;
    this.#producto = producto;
    this.#cantidad = cantidad;
    this.#precio = precio;
    this.#activo = activo;
  }

  get pedido(): number {
    return this.#pedido;
  }

  get producto(): number {
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
