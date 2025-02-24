import { Persona } from "./Persona";

export class Profesor extends Persona {
  constructor(
    _nombre: string,
    _apellido: string,
    _nacimiento: string,
    _id: number,
    _cPelo: string,
    _cOjos: string,
    private _correo_institucional: string,
    private _horario: string[],
    private _numero_asignaturas_impartidas: number,
  ) {
    super(_nombre, _apellido, _nacimiento, _id, _cPelo, _cOjos);
  }

  get correo_institucional() {
    return this._correo_institucional;
  }
  get horario() {
    return this._horario;
  }
  get numero_asignaturas_impartidas() {
    return this._numero_asignaturas_impartidas;
  }

  set correo_institucional(elemento: string) {
    this._correo_institucional = elemento;
  }
  set horario(elemento: string[]) {
    this._horario = elemento;
  }
  set numero_asignaturas_impartidas(elemento: number) {
    this._numero_asignaturas_impartidas = elemento;
  }

  showinfo(): string {
    return `${this.apellido}, ${this.nombre} {id: ${this.id}, nacimiento: ${this.nacimiento}, color de pelo: ${this.cPelo}, color de ojos: ${this.cOjos}, correo institucional: ${this._correo_institucional}, horario: de ${this._horario[0]} a ${this._horario[1]}, numero de asignaturas impartidas: ${this._numero_asignaturas_impartidas}`;
  }
}
