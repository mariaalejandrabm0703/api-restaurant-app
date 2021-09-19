export class Producto {
  readonly #descripcion: string;
  readonly #categoria: string;
  readonly #precio: number;
  readonly #activo: string;

  constructor(descripcion: string, categoria: string, precio: number, activo: string) {
    this.#descripcion = descripcion;
    this.#categoria = categoria;
    this.#precio = precio;
    this.#activo = activo;
  }

  get descripcion(): string {
    return this.#descripcion;
  }
  get categoria(): string {
    return this.#categoria;
  }
  get precio(): number {
    return this.#precio;
  }
  get activo(): string {
    return this.#activo;
  }

}
