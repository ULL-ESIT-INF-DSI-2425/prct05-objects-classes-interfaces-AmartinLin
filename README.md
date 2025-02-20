# Práctica 5
Para esta práctica hemos utilizado diversas herramientas para desarrollar correctamente todos los ejercicios en typescript con la finalidad de realizar una prueba final en la hora de prácticas

## Configuración del repositorio
Hemos instalado todas las herramientas y dependencias de anteriores (eslint, vitest, prettier, configuración de package.json, tsconfig, etc.). Al instalar las dependencias de eslint nos ha dado un problema de vulnerabilidad que nos ha obligado a bajar una versión a lo relacionado con eslint y vitest. 
Realizado las instalaciones y modificaciones oportunas hemos comenzado a configurar las Github Actions y a familiarizarnos con Coveralls. Para ello, hemos visualizado los videos del aula virtual que nos ha ofrecido el profesorado.

## CI (Github Actions)
1. Creamos un directorio llamado `.github/workflows` 
2. Creamos un fichero en dicho directorio llamdo `ci.yml`
3. Insertamos en el fichero anterior el flujo de trabajo que queramos, en mi caso he tomado la referencia del repositorio del aula virtual:
´´´

name: Tests

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x, 22.x, 23.x]

    steps:
    - name: Cloning repo
      uses: actions/checkout@v4
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v4
      with:
        node-version: ${{ matrix.node-version }}
    - name: Installing dependencies
      run: npm ci
    - name: Running tests
      run: npm test
      
´´´
4. 