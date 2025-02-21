import { PokeData } from "./pokedata";

/**
 * Interfaz auxiliar de la pokedex
 */
interface PokedexData {
  listaPokemons: PokeData[];
  agregarPokemon(pokemon: PokeData): void;
  listarPokemons(): PokeData[];
  datosPokemon(pokemon: PokeData): void;
  listarPorAtributo(atributo: keyof PokeData, ascendente: boolean): PokeData[];
}

export class Pokedex implements PokedexData {
  /**
   * Constructor de la clase pokedex
   * @param listaPokemons - Atributo público que almacena datos de pokemons, pero no los pokemons
   */
  constructor(public listaPokemons: PokeData[]) {}

  /**
   * Añade un pokemon al registro
   * @param pokemon - [PokeData] Datos del pokemon
   */
  agregarPokemon(pokemon: PokeData): void {
    this.listaPokemons.push(pokemon);
  }

  /**
   * Imprime por consola los datos completos de un pokemon
   * @param pokemon - [PokeData] Datos del pokemon 
   */
  datosPokemon(pokemon: PokeData): void {
    console.log("Nombre: ", pokemon.nombre);
    console.log("Tipo: ", pokemon.Tipo);
    console.log("Altura: ", pokemon.Altura);
    console.log("Peso: ", pokemon.Peso);
    console.log("Ataque: ", pokemon.Ataque);
    console.log("Defensa: ", pokemon.Defensa);
    console.log("Puntos de vida máximos: ", pokemon.HP);
  }

  /**
   * Devuelve una lista de los datos registrados de los pokemons
   * @returns PokeData[]
   */
  listarPokemons(): PokeData[] {
    return this.listaPokemons;
  }

  /**
   * Lista todos los pokemons según un orden de algún atributo
   * @param atributo - Atributo del que se va a ordenar
   * @param ascendente - si el orden es ascendente o descendente
   * @returns PokeData[] Lista de datos pokemon
   */
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

  /**
   * Filtra los datos según un atributo cualitativo
   * @param atributo - atributo cualitativo
   * @param valor - valor buscado de dicho atributo
   * @returns PokeData[] Lista de datos pokemon filtrado
   */
  filtrarPorAtributo<T extends keyof PokeData>(
    atributo: T,
    valor: PokeData[T],
  ): PokeData[] {
    return this.listaPokemons.filter((pokemon) => {
      return pokemon[atributo] === valor;
    });
  }

  /**
   * Filtra los datos según un atributo cuantitativo
   * @param atributo - atributo cuantitativo
   * @param condicion - Expresión según la que filtra
   * @returns PokeData[] Lista de datos pokemon filtrado
   */
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
