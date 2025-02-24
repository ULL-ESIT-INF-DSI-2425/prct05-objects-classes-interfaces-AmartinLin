import { Persona } from "./Persona";

export class Estudiante extends Persona {
  constructor(
    _nombre: string,
    _apellido: string,
    _nacimiento: string,
    _id: number,
    _cPelo: string,
    _cOjos: string,
    private _correo: string,
    private _asignaturas_matriculado: number,
  ) {
    super(_nombre, _apellido, _nacimiento, _id, _cPelo, _cOjos);
  }

  get correo() {
    return this._correo;
  }
  get asignaturas_matriculado() {
    return this._asignaturas_matriculado;
  }

  set correo(elemento: string) {
    this._correo = elemento;
  }
  
  set asignaturas_matriculado(elemento: number) {
    this._asignaturas_matriculado = elemento;
  }

  /**
   * Nos muestra toda la informacion acerca de un estudiante en forma de un string
   * @returns - string
   */
  showinfo(): string {
    return `${this.apellido}, ${this.nombre} {id: ${this.id}, nacimiento: ${this.nacimiento}, color de pelo: ${this.cPelo}, color de ojos: ${this.cOjos}, correo: ${this._correo}, asignaturas matriculado: ${this._asignaturas_matriculado}`;
  }
}
