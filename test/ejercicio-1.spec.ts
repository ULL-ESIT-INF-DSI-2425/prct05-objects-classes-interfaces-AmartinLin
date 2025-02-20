import { describe, expect, test } from "vitest";
import { Pokedex } from "../src/ejercicio-1/pokedex";
import { PokeData } from "../src/ejercicio-1/pokedata";

describe("Clase Pokedex", () => {
  const Pikachu: PokeData = {nombre : "Pikachu", Peso : 6, Altura: 0.4, Tipo: "Eléctrico", Ataque: 55, Defensa: 40, Velocidad: 90, HP: 35};
  const Bulbasaur: PokeData = {nombre: "Bulbasaur", Peso: 6.9, Altura: 0.7, Tipo: "Planta", Ataque: 49, Defensa: 49, Velocidad: 45, HP: 45};
  const Charmander: PokeData = {nombre: "Charmander", Peso: 8.5, Altura: 0.6, Tipo: "Fuego", Ataque: 52, Defensa: 43, Velocidad: 65, HP: 39};
  
  const miPokedex = new Pokedex([Pikachu, Bulbasaur, Charmander]);

  test("Listado de pokemons registrados", () => {
    expect(miPokedex.listarPokemons()).toStrictEqual([Pikachu, Bulbasaur, Charmander]);
  });

  test("Listado de pokemons con filtro de tipo, orden ascendente", () => {
    expect(miPokedex.listarPorAtributo("Tipo")).toStrictEqual([Pikachu, Charmander, Bulbasaur]);
  });

  test("Listado de pokemons con filtro de tipo, orden descendente", () => {
    expect(miPokedex.listarPorAtributo("Tipo", false)).toStrictEqual([Bulbasaur, Charmander, Pikachu]);
  });

  test("Filtrado, tipo = fuego", () => {
    expect(miPokedex.filtrarPorAtributo("Tipo", "Fuego")).toStrictEqual([Charmander]);
  });

  test("Filtrado, por valor, ataque > 50", () => {
    expect(miPokedex.filtrarPorCondicion("Ataque", (ataque) => ataque > 50)).toStrictEqual([Pikachu, Charmander]);
  });
  
  test("adición de un nuevo pokemon", () => {
    miPokedex.agregarPokemon({nombre : "Flareon", Peso : 30, Altura: 1.0, Tipo: "Fuego", Ataque: 70, Defensa: 40, Velocidad: 30, HP: 70})
    expect(miPokedex.filtrarPorAtributo("nombre", "Flareon")).toStrictEqual([{nombre : "Flareon", Peso : 30, Altura: 1.0, Tipo: "Fuego", Ataque: 70, Defensa: 40, Velocidad: 30, HP: 70}])
  })
});


describe("Clase combat", () => {
  const Pikachu: Pokemon = {nombre : "Pikachu", Peso : 6, Altura: 0.4, Tipo: "Eléctrico", Ataque: 55, Defensa: 40, Velocidad: 90, HP: 35};
  const Flareon: Pokemon = {nombre : "Flareon", Peso : 30, Altura: 1.0, Tipo: "Fuego", Ataque: 70, Defensa: 40, Velocidad: 30, HP: 70};
  const Combate: Combat = {Pikachu, Flareon};
  test("Método start", () => {
    expect(Combate.start()).toBe([
      {"turno": 0, "vidas": [1.25, 35]},
      {"turno": 1, "vidas": [1.25, 0]},
    ])
  });
})