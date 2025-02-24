export abstract class Persona {
  constructor(
    private _nombre: string,
    private _apellido: string,
    private _nacimiento: string,
    private _id: number,
    private _cPelo: string,
    private _cOjos: string,
  ) {}

  get nombre(): string {
    return this._nombre;
  }
  get apellido(): string {
    return this._apellido;
  }
  get nacimiento(): string {
    return this._nacimiento;
  }
  get id() {
    return this._id;
  }
  get cPelo(): string {
    return this._cPelo;
  }
  get cOjos(): string {
    return this._cOjos;
  }

  set nombre(elemento: string) {
    this._nombre = elemento;
  }
  set apellido(elemento: string) {
    this._apellido = elemento;
  }
  set nacimiento(elemento: string) {
    this._nacimiento = elemento;
  }
  set id(elemento: number) {
    this._id = elemento;
  }
  set cPelo(elemento: string) {
    this._cPelo = elemento;
  }
  set cOjos(elemento: string) {
    this._cOjos = elemento;
  }

  /**
   * Nos muestra la informacion de la persona en forma de string
   */
  abstract showinfo(): string;
}
