import { urlFrontend } from '../../routes/RoutesFrontend';

export interface SystemCosmo {
  name: string;
  link: string;
}

export const arraySistem: Array<SystemCosmo> = [
  {
    name: 'Agregar Persona',
    link: `${urlFrontend.person.module}/${urlFrontend.person.personIndex}`,
  },
  {
    name: 'Agregar Empleado',
    link: `${urlFrontend.employee.module}/${urlFrontend.employee.employeIndex}`,
  },
];
