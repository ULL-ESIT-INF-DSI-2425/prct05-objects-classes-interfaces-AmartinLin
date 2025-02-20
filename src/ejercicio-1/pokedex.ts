import { PokeData } from "./pokedata";

interface PokedexData {
  listaPokemons: PokeData[];
  agregarPokemon(pokemon: PokeData): void;
  listarPokemons(): PokeData[];
  datosPokemon(pokemon: PokeData): void;
  listarPorAtributo(atributo: keyof PokeData, ascendente: boolean): PokeData[];
}

export class Pokedex implements PokedexData {
  constructor(public listaPokemons: PokeData[]) {}

  agregarPokemon(pokemon: PokeData): void {
    this.listaPokemons.push(pokemon);
  }

  datosPokemon(pokemon: PokeData): void {
    console.log("Nombre: ", pokemon.nombre);
    console.log("Tipo: ", pokemon.Tipo);
    console.log("Altura: ", pokemon.Altura);
    console.log("Peso: ", pokemon.Peso);
    console.log("Ataque: ", pokemon.Ataque);
    console.log("Defensa: ", pokemon.Defensa);
    console.log("Puntos de vida máximos: ", pokemon.HP);
  }

  listarPokemons(): PokeData[] {
    return this.listaPokemons;
  }

  listarPorAtributo(
    atributo: keyof PokeData,
    ascendente: boolean = true,
  ): PokeData[] {
    const pokemonsOrdenados = [...this.listaPokemons].sort((a, b) => {
      const valorA = a[atributo];
      const valorB = b[atributo];
      if (typeof valorA === "number" && typeof valorB === "number") {
        return ascendente ? valorA - valorB : valorB - valorA;
      } else if (typeof valorA === "string" && typeof valorB === "string") {
        return ascendente
          ? valorA.localeCompare(valorB)
          : valorB.localeCompare(valorA);
      }
      return 0;
    });
    return pokemonsOrdenados;
  }

  filtrarPorAtributo<T extends keyof PokeData>(
    atributo: T,
    valor: PokeData[T],
  ): PokeData[] {
    return this.listaPokemons.filter((pokemon) => {
      return pokemon[atributo] === valor;
    });
  }

  filtrarPorCondicion(
    atributo: keyof PokeData,
    condicion: (valor: number) => boolean,
  ): PokeData[] {
    return this.listaPokemons.filter((pokemon) => {
      const valor = pokemon[atributo];
      return typeof valor === "number" && condicion(valor);
    });
  }
}
