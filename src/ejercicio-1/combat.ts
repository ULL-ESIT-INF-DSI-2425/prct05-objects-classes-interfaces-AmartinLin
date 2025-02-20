import { PokeData } from "./pokedata";
import { RegistroDeTurnos } from "./registroDeTurnos";

export class Combat {
  private registro: RegistroDeTurnos;

  constructor(
    private pokemon1: PokeData,
    private pokemon2: PokeData,
  ) {
    this.registro = new RegistroDeTurnos();
  }

  private calcularEfectividad(
    tipoAtacante: string,
    tipoDefensor: string,
  ): number {
    const efectividades: Record<string, Record<string, number>> = {
      Fuego: { Hierba: 2, Agua: 0.5, Eléctrico: 1, Fuego: 1 },
      Agua: { Hierba: 0.5, Eléctrico: 0.5, Fuego: 2, Agua: 1 },
      Hierba: { Fuego: 0.5, Agua: 2, Eléctrico: 1, Hierba: 1 },
      Eléctrico: { Agua: 2, Hierba: 1, Fuego: 1, Eléctrico: 1 },
    };
    return efectividades[tipoAtacante][tipoDefensor] || 1;
  }

  private calcularDaño(atacante: PokeData, defensor: PokeData): number {
    const efectividad = this.calcularEfectividad(atacante.Tipo, defensor.Tipo);
    return (50 * (atacante.Ataque / defensor.Defensa) * efectividad);
  }

  start(): { numero: number; vidas: number[] }[] {
    let turno = 1;
    let vida1: number = this.pokemon1.HP;
    let vida2: number = this.pokemon2.HP;

    // console.log(
    //   `¡Comienza el combate entre ${this.pokemon1.nombre} y ${this.pokemon2.nombre}!`,
    // );

    while (vida1 > 0 && vida2 > 0) {
      const daño1 = this.calcularDaño(this.pokemon1, this.pokemon2);
      vida2 = Math.max(0, vida2 - daño1);
      this.registro.agregarTurno(turno, vida1, vida2);

      // console.log(
      //   `Turno ${turno}: ${this.pokemon1.nombre} ataca a ${this.pokemon2.nombre} y le causa ${daño1} de daño.`,
      // );
      // console.log(
      //   `Estado: ${this.pokemon1.nombre} (HP: ${vida1}) - ${this.pokemon2.nombre} (HP: ${vida2})`,
      // );
      
      if (vida2 === 0) break;
      turno++;
      const daño2 = this.calcularDaño(this.pokemon2, this.pokemon1);
      vida1 = Math.max(0, vida1 - daño2);
      this.registro.agregarTurno(turno, vida1, vida2);
      // console.log(
      //   `Turno ${turno}: ${this.pokemon2.nombre} ataca a ${this.pokemon1.nombre} y le causa ${daño2} de daño.`,
      // );
      // console.log(
      //   `Estado: ${this.pokemon1.nombre} (HP: ${vida1}) - ${this.pokemon2.nombre} (HP: ${vida2})`,
      // );

      turno++;
    }
    //const ganador = vida1 > 0 ? this.pokemon1.nombre : this.pokemon2.nombre;
    //console.log(`¡${ganador} ha ganado el combate!`);
    return this.registro.obtenerTurnos()
  }
}