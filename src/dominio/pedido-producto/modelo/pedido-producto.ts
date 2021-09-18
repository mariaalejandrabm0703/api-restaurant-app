export class PedidoProducto {
  readonly #idPedido: number;
  readonly #idProducto: number;
  readonly #cantidad: number;
  readonly #precio: number;
  readonly #activo: string;
  readonly #fechaCreacion: Date;

  constructor(idPedido: number, idProducto: number, cantidad: number, precio: number, activo: string, fechaCreacion: string) {
    this.#idPedido = idPedido;
    this.#idProducto = idProducto;
    this.#cantidad = cantidad;
    this.#precio = precio;
    this.#activo = activo;
    this.#fechaCreacion = new Date(fechaCreacion);
  }

  get idPedido(): number {
    return this.#idPedido;
  }

  get idProducto(): number {
    return this.#idProducto;
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

  get fechaCreacion(): Date {
    return this.#fechaCreacion;
  }
}
