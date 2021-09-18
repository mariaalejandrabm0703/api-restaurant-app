export class Pedido {
  readonly #precio: number;
  readonly #activo: string;
  readonly #idCliente: string;
  readonly #fechaCreacion: Date;

  constructor(precio: number, activo: string, idCliente:string, fechaCreacion: string) {
    this.#precio = precio;
    this.#activo = activo;
    this.#idCliente = idCliente;
    this.#fechaCreacion = new Date(fechaCreacion);
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

  get fechaCreacion(): Date {
    return this.#fechaCreacion;
  }
}
