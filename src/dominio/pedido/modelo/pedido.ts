export class Pedido {
  readonly #precio: number;
  readonly #activo: string;
  readonly #idCliente: string;
  readonly #fechaEntrega: string;

  constructor(precio: number, activo: string, idCliente:string, fechaEntrega: string) {
    this.#precio = precio;
    this.#activo = activo;
    this.#idCliente = idCliente;
    this.#fechaEntrega = fechaEntrega;
  }

  get precio(): number {
    return this.#precio;
  }

  get activo(): string {
    return this.#activo;
  }

  get idCliente(): string {
    return this.#idCliente;
  }

  get fechaEntrega(): string {
    return this.#fechaEntrega;
  }
}
