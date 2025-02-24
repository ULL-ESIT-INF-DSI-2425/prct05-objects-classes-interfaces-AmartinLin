import { describe, expect, test } from "vitest";
import { Persona } from "../src/modi/Persona"

describe("Clase Persona", () => {
  const person = new Persona("Alberto", "Castellón", "22-3-1999", 123456789, "Castaño", "Negros");
  test("Getters de la clase Persona", () => {
    expect(person.nombre).toBe("Alberto");
    expect(person.apellido).toBe("Castellón");
    expect(person.nacimiento).toBe("22-3-1999");
    expect(person.id).toBe(123456789);
    expect(person.cPelo).toBe("Castaño");
    expect(person.cOjos).toBe("Negros");
  });

  test("Setters de la clase Persona", () => {
    person.nombre = "juan";
    expect(person.nombre).toBe("juan");
    person.apellido = "de la rosa";
    expect(person.apellido).toBe("de la rosa");
    person.nacimiento = "4-5-1994";
    expect(person.nacimiento).toBe("4-5-1994");
  });
});


describe("Clase combat", () => {
  
  test("Método start", () => {
    expect().toEqual()
  });
})