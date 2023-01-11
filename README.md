### Caracteristicas

- Consulta las **colonias** que pertenecen a un codigo postal
- Obten a que** ciudad y estado** pertenece el codigo postal ingresado
- Protege tus consultas usando API-KEYS
- Validacion de codigos postales (Formato incorrecto, y no existente)
- Base de datos actualizada al **09/01/2023 (9 de enero del 2023)**
- Base de datos en **Microsoft SQL server**

# MEXICO-ZIP-CODES

![](https://myawesomeportafolio.web.app/src/4x/logo-180x180.png)

## Instalaciones

El proyecto cuenta con las instalaciones depaquetes requeridos en el archivo **package.json** pero este esta desarrollado con **TypeScript** por lo que necesitaremos correr los siguientes comandos:
####Install
`$ npm install typescript -g`

`$ npm install nodemon -g`

una vez instaladas las dependencias globales, nos posicionaremos en la raiz del proyecto y correremos el siguiente comando:

`$ npm install`

Una vez instaladas las dependencias necesarias vamos a crear el archivo **.env** en la raiz del proyecto con los siguientes parametros:

    PORT=PUERTO_DESTINO
    MSSQL_HOST=SERVER_NAME
    MSSQL_DB=PostalCodes
    MSSQL_USER=USER_SERVER
    MSSQL_PASSWORD=PASSWORD_SERVER

Para la base de datos requiere la descarga del backup desde el siguiente enlace, hay que restaurar la base de datos:

##[PostalCodes Database](https://mega.nz/file/aOZxnKIQ#eUUjuTtUTykhbH6UxorzEFfijG6k96sorip9XP5OKWs "PostalCodes Database")

Los siguientes comandos son indispensbles para probar y contruir el proyecto

#### Test run

`$ npm run dev`

#### Build proyect

`$ npm run build`

#### Test run

`$ npm run dev`

## Consultas

El siguiente codigo es un ejemplo de una consulta realizada con **axios**

```javascript
const axios = require("axios");

const options = {
  method: "GET",
  url: "http://localhost:3000/api/v1/zipcode/",
  params: { zipcode: "646" },
  headers: {
    "x-api-key": "apikeyexample",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
```

# Contacto

Para cualquier duda o comentario puede contactarse a mi correo:

arturosistemas94@gmail.com
