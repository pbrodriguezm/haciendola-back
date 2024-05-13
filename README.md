<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

### Creación del Backend

En este repositorio se ha desarrollado una aplicación backend utilizando Node.js con el framework NestJS, Sequelize como ORM para la conexión a la base de datos relacional y JWT para la autenticación de usuarios. Además, se ha integrado Swagger para documentar la API REST.

#### Implementaciones:

1. **Base de Datos Relacional:** Se ha utilizado Sequelize como ORM, lo que permite conectar la aplicación a una base de datos relacional.

2. **Entidades:** Se han definido dos entidades principales:
   - **Usuarios:** Cuentas de usuario con campos como usuario y contraseña, cumpliendo con los requisitos mínimos.
   - **Productos:** Se han creado los modelos necesarios para almacenar la información detallada en el archivo Excel de productos adjunto.

3. **Carga de Datos:** Una vez creadas las tablas, se ha implementado la funcionalidad para cargar los productos detallados en el archivo Excel a la base de datos.

4. **Autenticación de Usuarios:** Se ha implementado un endpoint para autenticar usuarios basado en su usuario/contraseña.

5. **API REST:** Se han creado los endpoints necesarios para generar una API REST para la gestión de productos.

#### Tecnologías Utilizadas:

- **Node.js:** Plataforma de desarrollo utilizada para el backend.
- **NestJS:** Framework de Node.js utilizado para crear la aplicación backend.
- **Sequelize:** ORM utilizado para interactuar con la base de datos relacional.
- **JWT:** Sistema de autenticación utilizado para gestionar la seguridad de la aplicación.
- **Swagger:** Herramienta utilizada para documentar la API REST.

#### Instrucciones de Uso:


## Installation

1. **Pre-requisite:** Ensure you have Node.js v16.x installed. You can download it [here](https://nodejs.org/).
2. **Pre-requisite:** Ensure MySQL is installed on your system.
3. **Pre-requisite:** configurar archivo .env con las Variables de la Base de datos

```bash
$ npm install

# Data Mock para MYSQL basado en excel brindado
$ npm run seed


```

## Running the app

```bash
# development
$ npm run start

```

## docs Swagger API


- Backend  Services RES API- [http://localhost:8080/](http://localhost:8080/)
- Backend Swagger Docs - [http://localhost:8080/docs](http://localhost:8080/docs)

## License

Nest is [MIT licensed](LICENSE).
