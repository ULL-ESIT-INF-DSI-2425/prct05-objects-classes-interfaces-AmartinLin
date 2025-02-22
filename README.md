# Práctica 5
Para esta práctica hemos utilizado diversas herramientas para desarrollar correctamente todos los ejercicios en typescript con la finalidad de realizar una prueba final en la hora de prácticas

## Configuración del repositorio
Hemos instalado todas las herramientas y dependencias de anteriores (eslint, vitest, prettier, configuración de package.json, tsconfig, etc.). Al instalar las dependencias de eslint nos ha dado un problema de vulnerabilidad que nos ha obligado a bajar una versión a lo relacionado con eslint y vitest. 
Realizado las instalaciones y modificaciones oportunas hemos comenzado a configurar las Github Actions y a familiarizarnos con Coveralls. Para ello, hemos visualizado los videos del aula virtual que nos ha ofrecido el profesorado.

## CI (Github Actions)
1. Creamos un directorio llamado `.github/workflows` 
2. Creamos un fichero en dicho directorio llamdo `ci.yml`
3. Insertamos en el fichero anterior el flujo de trabajo que queramos, en mi caso he tomado la referencia del repositorio del aula virtual:
```yaml
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
```
4. Una vez realizado lo anterior simplemente tendríamos que hacer un git push con los ultimos cambios y los test se ejecutarían al subirse al repositorio.

## Coverage
Para realizar el cubrimiento de código hemos seguido el tutorial proporcionado por el profesorado en el aula virtual, los pasos a seguir han sido los siguientes:
1. hemos creado un nevo "script" en el `package.json` llamado `coverage` que ejecutará el debido seguimiento. El comando que ejecuta sería `vitest run --coverage --coverage.include src/*` el cual redigige al codigo escrito en el directorio src.
2. La primera vez nos obliga a instalarlo, por lo que lo instalamos con coverage-v8, que es el motor por defecto.
> NOTA: durante la práctica hemos tenido muchos problemas con coverage ya que no se tiene en cuenta la configuración con `vitest.config.mts` que al parecer es necesaria para que encuentre los tests.
3. Hemos creado el fichero `vitest.config.mts` y le hemos puesto la siguiente configuración:
```ts
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.ts'], 
      reporter: ['text', 'lcov'],
    },
  },
});
```
4. hemos instalado el paquete que nos falta con el comando `npm install vite-tsconfig-paths --save-dev`
5. ejecutando ahora el comando `npx vitest --coverage` ya nos da los resultados de nuestro cubrimiento. (También cambiamos el comando en package.json)

### Coveralls
Hemos seguido el tutorial al igual que con coverage
1. Nos hemos registrado con nuestra cuenta de github a [coveralls](https://coveralls.io/)
2. hemos pues nuestro repositorio en publico y lo hemos añadido a coveralls
3. Seguidamente creamos nuestro `.github/workflows/coveralls.yml` y pegamos el código proporcionado en el aula virtual: 
```yml
name: Coveralls

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: Cloning repo
      uses: actions/checkout@v4
    - name: Use Node.js 23.x
      uses: actions/setup-node@v4
      with:
        node-version: 23.x
    - name: Installing dependencies
      run: npm ci
    - name: Generating coverage information
      run: npm run coverage
    - name: Coveralls GitHub Action
      uses: coverallsapp/github-action@v2.3.6
      with:
        github-token: ${{ secrets.GITHUB_TOKEN }}
```
Esto lo que permitirá es que podamos llevar el cubrimiento de código en coveralls directamente cuando hagamos algun pull_request o push 
4. hacemos un push y en la página de coveralls le damos al repo on GitHub, para ir al repositorio en cuestión y verificar su ejecución.
5. Una vez ejecutado en la página de coveralls nos aparece nuestro porcentaje de cubrimiento y nuestra gráfica con los detalles del código.