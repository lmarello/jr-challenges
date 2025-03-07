import {
  Challenge0,
  Challenge1,
  Challenge2,
  Challenge3,
  Challenge4,
  Challenge5,
} from "../pages";

export const routes = [
  {
    name: "Comencemos",
    path: "/challenge-0",
    Component: Challenge0,
    goal: `🎯 El enlace 'COMENCEMOS' no funciona. Deberás hacer que al hacer click en el texto se navegue a la ruta '/challenge-1'.`,
  },
  {
    name: "Challenge 1",
    path: "/challenge-1",
    Component: Challenge1,
    goal: `🎯 Se está visualizando solo 1 país, listar todos los paises del array.`,
  },
  {
    name: "Challenge 2",
    path: "/challenge-2",
    Component: Challenge2,
    goal: `🎯 Listar todos los paises del array que pertenezcan al continente 'América'.`,
  },
  {
    name: "Challenge 3",
    path: "/challenge-3",
    Component: Challenge3,
    goal: `🎯 Listar todos los paises del array y ordernarlos alfabéticamente según su nombre.`,
  },
  {
    name: "Challenge 4",
    path: "/challenge-4",
    Component: Challenge4,
    goal: `🎯 Listar los 3 paises del array con mayor población.
           | 🎯 opcional: mostrar la población de cada país.
           | 🎯 opcional: mostrar la población de cada país en un formato legible (ej. 14.345.342).
           `,
  },
  {
    name: "Challenge 5",
    path: "/challenge-5",
    Component: Challenge5,
    goal: `🎯 Implementar las funciones necesarias para que el contador funcione (incrementar / decrementar / reiniciar)`,
  },
];
