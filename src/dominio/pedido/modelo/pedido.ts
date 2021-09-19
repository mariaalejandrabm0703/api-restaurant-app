export class Pedido {
  readonly #precio: number;
  readonly #activo: string;
  readonly #idCliente: string;

  constructor(precio: number, activo: string, idCliente:string) {
    this.#precio = precio;
    this.#activo = activo;
    this.#idCliente = idCliente;
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
}
