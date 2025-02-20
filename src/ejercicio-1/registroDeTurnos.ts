interface Turno {
  numero: number;
  vidas: [number, number];
}

export class RegistroDeTurnos {
  private turnos: Turno[] = [];

  agregarTurno(numero: number, vida1: number, vida2: number): void {
    this.turnos.push({ numero, vidas: [vida1, vida2] });
  }

  obtenerTurnos(): Turno[] {
    return this.turnos;
  }

  mostrarTurnos(): void {
    this.turnos.forEach((turno) => {
      console.log(
        `Turno ${turno.numero}: Vida Pokémon 1 = ${turno.vidas[0]}, Vida Pokémon 2 = ${turno.vidas[1]}`,
      );
    });
  }
}
