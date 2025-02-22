/**
 * Interfaz que define cada turno
 */
interface Turno {
  numero: number;
  vidas: [number, number];
}

export class RegistroDeTurnos {
  private turnos: Turno[] = [];

  /**
   * Añade un turno al registro de turnos
   * @param numero - identificador del turno (nos permite ir en orden)
   * @param vida1 - HP del primer pokemon
   * @param vida2 - HP del segúndo pokemon
   */
  agregarTurno(numero: number, vida1: number, vida2: number): void {
    this.turnos.push({ numero, vidas: [vida1, vida2] });
  }

  /**
   * Devuelve los turnos registrados
   * @returns Turno[] - registro de turnos
   */
  obtenerTurnos(): Turno[] {
    return this.turnos;
  }

  // /**
  //  * Imprime por consola los turnos que se han llevado a cabo
  //  * (No se verifica en los test)
  //  */
  // mostrarTurnos(): void {
  //   this.turnos.forEach((turno) => {
  //     console.log(
  //       `Turno ${turno.numero}: Vida Pokémon 1 = ${turno.vidas[0]}, Vida Pokémon 2 = ${turno.vidas[1]}`,
  //     );
  //   });
  // }
}
