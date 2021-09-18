export class Producto {
  readonly #descripcion: string;
  readonly #categoria: string;
  readonly #precio: number;
  readonly #activo: string;
  readonly #fechaCreacion: Date;

  constructor(descripcion: string, categoria: string, precio: number, activo: string, fechaCreacion: string) {
    this.#descripcion = descripcion;
    this.#categoria = categoria;
    this.#precio = precio;
    this.#activo = activo;
    this.#fechaCreacion = new Date(fechaCreacion);
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
  get fechaCreacion(): Date {
    return this.#fechaCreacion;
  }
}
