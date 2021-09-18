export class Cliente {
  readonly #nombre: string;
  readonly #identificacion: string;
  readonly #telefono: string;
  readonly #email: string;
  readonly #activo: string;
  readonly #fechaCreacion: Date;

  constructor(nombre: string, identificacion: string, fechaCreacion: string, telefono: string, email: string, activo: string,) {
    this.#nombre = nombre;
    this.#identificacion = identificacion;
    this.#telefono = telefono;
    this.#email = email;
    this.#activo = activo;
    this.#fechaCreacion = new Date(fechaCreacion);
  }

  get nombre(): string {
    return this.#nombre;
  }

  get identificacion(): string {
    return this.#identificacion;
  }

  get telefono(): string {
    return this.#telefono;
  }

  get email(): string {
    return this.#email;
  }

  get activo(): string {
    return this.#activo;
  }

  get fechaCreacion(): Date {
    return this.#fechaCreacion;
  }
}
