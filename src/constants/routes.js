import { Challenge0, Challenge1, Challenge2 } from "../pages";

export const routes = [
  {
    name: "Challenge 0",
    path: "/challenge-0",
    Component: Challenge0,
    goal: `El enlace 'VAMOS AL CHALLENGE 1' no funciona. Deberás hacer que al hacer click en el texto se navegue a la ruta '/challenge-1'.`,
  },
  {
    name: "Challenge 1",
    path: "/challenge-1",
    Component: Challenge1,
    goal: `Se está visualizando solo 1 país, hacer que se visualicen todos los países del listado`,
  },
  {
    name: "Challenge 2",
    path: "/challenge-2",
    Component: Challenge2,
    goal: `Ahora tenes que mostrar solamente los países que pertenezcan a América`,
  },
];
