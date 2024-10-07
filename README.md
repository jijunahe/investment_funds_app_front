# Investment Funds App (Frontend)

Este es el frontend de la **Investment Funds App**, construido con React. La aplicación permite a los usuarios ver y gestionar diferentes fondos de inversión, ofreciendo una interfaz amigable con contenido dinámico.

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación, incluyendo componentes, hooks y servicios.
- **public/**: Archivos estáticos y el archivo principal `index.html` que sirve como punto de entrada para la app.
- **build/**: Compilación de la app para producción.
- **.env**: Variables de entorno utilizadas por la app.

## Requisitos Previos

Para ejecutar este proyecto localmente, necesitas tener instalados los siguientes requisitos:
- **Node.js**: Puedes descargarlo desde [aquí](https://nodejs.org/).
- **npm** (Administrador de paquetes de Node) o **yarn**: Viene incluido con Node.js.

## Instalación

Para configurar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   
   git clone  https://github.com/jijunahe/investment_funds_app_front.git

2. Navega al directorio del proyecto:

  cd investment_funds_app_front

3. Instala las dependencias:

  npm install     ó      yarn install
4. Verificar o crear .env en la raiz del proyecto  Agregar la siguiente variable:

RUTA  investment_funds_app_front/.env

REACT_APP_API_URL="http://localhost:8000/"

### Scripts Disponibles
En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### npm start
Ejecuta la aplicación en modo de desarrollo. Abre http://localhost:3000 para verla en el navegador.

La página se recargará si haces cambios en el código.

### npm run build
Construye la aplicación para producción en la carpeta build.

### npm test
Lanza el ejecutor de pruebas.


### Consideraciones a tener en cuenta.

Al entrar a la raiz del sitio desde la web, por ejemplo http://localhost:3000/ notaran una de dos cosas.

1. Si previamente a la ejecucion del frontend agregaron usuarios, veran la lista para que puedan navegar con ellos en el sitio, basta con hacer click en "Ir al portal"

2. Si no hay usuarios, saldra un mensaje indicando que deben agregar usuarios usando el swagger o postman, ahi se les indicará qué servicio es el adecuado para crear clientes.


### CREACION DE USUARIO DESDE POSTMAN O CURL:
http://127.0.0.1:8000/users/

JSON
{
  "id": "string", ### NO es nesesario poner nada aca
  "nombres": "str",
  "email": "str",
  "identificacion": "str",
  "saldo_base": int
}

### DESDE EL SWAGGER

Una vez montado el ambiente backend, ir a:

http://127.0.0.1:8000/docs#/default/create_user_users__post

En el recuadro, hacer click en el boton a la derecha "Try Out"

Completar el JSON que aparece en el centro de la pantalla con la información requerida.

JSON
{
  "id": "string", ### NO es nesesario poner nada aca
  "nombres": "str",
  "email": "str",
  "identificacion": "str",
  "saldo_base": int
}

3. Es importante crear los Fondos de inversion. Al igual que el punto anterior, tenemos dos opciones


  ### CREACION DE FONDOS DESDE POSTMAN O CURL:
  http://127.0.0.1:8000/funds/

  JSON
  {
  "nombre": "string",
  "valor": 0,
  "categoria": "string"
  }

  ### DESDE EL SWAGGER

  Una vez montado el ambiente backend, ir a:

  http://127.0.0.1:8000/docs#/default/create_fund_funds__post

  En el recuadro, hacer click en el boton a la derecha "Try Out"

  Completar el JSON que aparece en el centro de la pantalla con la información requerida.
JSON
  {
  "nombre": "string",
  "valor": 0,
  "categoria": "string"
  }



