# ¡Hola Equipo Cornershop 🥑!

Gracias por la oportunidad de presentar esta prueba, que encontre muy entretenida y desafiante.

Una vez recibidas las indicaciones, mi objetivo era terminar la mayoría de funcionalidades durante el fin de semana ya que quería tener el tiempo necesario para poder ir revisando y mejorando la entrega en los días siguientes. Empece revisando el Figma para entender los flujos, componentes y lógica a desarrollar.

Al momento de empezar a trabajar con el código, considere que era mejor desarrollar los componentes principales y luego ir incorporando la lógica de las funcionalidades. En este punto, levante un **Trello** que me permitió organizarme con las tareas pendientes que iba detectando.

Defini que librerías que usaría, aunque con la intención de que sean las menores posibles.

Para las rutas, opte por **`Wouter`**, una opción muy liviana para hacer routing, considerando que eran solo 2 vistas y no tenían ninguna lógica compleja.

Para el manejo del estado global, considerando que solo necesitaba saber cuales eran los contadores seleccionados para eliminarlos, compartirlos y mostrar el resumen, opte por usar **`Context`**, de esa forma no usaba una librería adicional.

Quise reutilizar todos los componentes de interfaz que venían en el boilerplate. En parte para optimizar tiempos y en otra para adoptar posibles buenas prácticas que usan en **Cornershop**. Solo tuve que aplicar algunos cambios visuales y funcionales para que se adaptaran a todas las funcionalidades que necesitaba.

Además, aproveche la oportunidad de probar y aprender sobre algunas herramientas:

**1. React Query:** para obtener, actualizar y eliminar los datos de la aplicación. Me pareció muy interesante porque además usa Hooks y el manejo de los estados de carga y error es muy sencillo.

**2. Styled Components:** me pareció la forma perfecta de organizar los estilos de la aplicación, utilizando las ventajas de JS dentro de CSS.

**3. React Testing Library:** Para realizar los tests de la aplicación. En realidad no había realizado tests antes, solo ejemplos, así que aprendí mucho con esto 💪🏽

## Conclusión 🏆

Le puse mucha energía a esta prueba y considero que logre un buen resultado. Como pidieron, mi intención fue en todo momento entregar una aplicación lista para producción por lo que la probe mucho y en varios dispositivos. Espero que sea de su agrado.

---

# Cornershop Frontend Test v1.5.0

#### ⚠️ Before you begin

> Create a new git repository on the root of this folder, upload it to Github on a **private** repository and invite your contact from HR.

If you are from **Chile** please invite [@inge-yang](https://github.com/inge-yang)

If you are from **México** plese invite [@dankols](https://github.com/dankols)

If you are from **Colombia** plese invite [@javitormoparker](https://github.com/javitormoparker)

If you are from **Brazil** plese invite [@alecornershop](https://github.com/alecornershop)

In **every case** please add [@cornershop-hr](https://github.com/cornershop-hr) as collaborators.

## Overview

You have been commissioned to implement a counter application following the design specs provided [here](https://www.figma.com/file/6CnuM0Gj9oiwi2AV9vXLRH/Counters-for-the-web?node-id=0%3A1).

The application consists of several screens where each screen has one or multiple states that you will have to implement following the design specs the best you can.

We have provided starter boilerplate so you can write your application without any hassle and also a NodeJS dummy backend with all the neccessary endpoints to persist the data.

We've also provided a few UI components and basic styling rules so you can focus solely on implementing the screens the best you can. Here's a list of all the things included:

- Alert
- Button
- Icons
- Loading
- Modal
- Text Input

> These components are just a starting spot, so if you need to change them in any form or fashion (or add more), feel free to do it.

For bootstrapping the frontend application we're using `react-scripts`, so as you might have guessed you **must** use React (it's our primary view layer for frontend applications here at Cornershop).

> Note: This is NOT a backend test. Don't make it require any databases. Don't touch the server folder. Just leave it as it is.

## Requirements

Your submission will be evaluated considering the following criterias:

- Feature completion.
  - All features must be implemented for a perfect score.
- Faithful implementation of the challenge.
  - Follow the design spec as close as you can.
- Good architecture and software design.
  - _Hint:_ Usage of design patterns, good code organization, separation of concerns, etc.
- Use of best practices when writing code.
  - _Hint:_ Idiomatic & readable code, good use of composition, DRY, etc.
- The application must persist data back to the server.
- Good management of state using built-in React features or third party dependencies (context, `redux`, `mobx`, `xstate` or whatever you might like).
- You must include tests.
  - Behavior tests are perfect.
- Your project must be self-contained (make sure you're not using global dependencies).
- **Last but not least**, we would love to understand your thought process, so writing a little summary of your choices, what you did and how you solved the test is required (write it here on this README file).

Other things to consider:

- For styling you can use whatever CSS flavor you want: plane old CSS, SASS, LESS, CSS-in-JS, CSS modules, everything is allowed.
- Please consider that we expect your solution to be production-ready. In other words, that millions of users would be thrilled to use your product.
- You can use whatever dependencies/libraries you want, the only requirement dependency-wise is to use React

## Getting started

First and foremost, make sure you have `node` and `npm` (or `yarn`) installed on your machine, then run:

```bash
$ npm install
$ npm start
```

For `yarn` users:

```bash
$ yarn
$ yarn start
```

## API endpoints / examples

Since the backend API runs locally on a different port (`3001`) than the `react-scripts` dev server (`3000`), we have setup a proxy so you don't have to do anything special to consume the API (fetching data from `/api/v1/counter` will do).

> The following endpoints are expecting a `Content-Type: application/json` header.

#### **GET** `/api/v1/counter`.

_Fetch a list of counters._

```javascript
/* Response */
[];
```

#### **POST** `/api/v1/counter`.

_Adds a counter._

```javascript
/* Body */
{ title: "bob" }

/* Response */
{ id: "asdf", title: "bob", count: 0 }
```

#### **POST** `/api/v1/counter/inc`

_Increments the value of a counter._

```javascript
/* Body */
{ id: "asdf" }

/* Response */
{ id: "asdf", title: "bob", count: 1 }
```

#### **POST** `/api/v1/counter/dec`

_Decrements the value of a counter._

```javascript
/* Body */
{ id: "asdf" }

/* Response */
{ id: "asdf", title: "bob", count: 0 }
```

#### **DELETE** `/api/v1/counter`

_Deletes a counter._

```javascript
/* Body */
{
  id: 'qwer';
}

/* Response */
('qwer'); // The id of the deleted counter
```

---

Good luck! 🎉

We hope your submission is… to die for.

![Coffin dance](coffin.gif)
