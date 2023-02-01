import { urlFrontend } from '../../routes/RoutesFrontend';

export interface SliderMenu {
  name: string;
  route: string;
  icons: string;
  actived: boolean;
  children?: Array<SliderMenu>;
}
export const arrayMenu: Array<SliderMenu> = [
  {
    name: 'Usuarios',
    route: ``,
    icons: 'person-outline',
    actived: false,
    children: [
      {
        name: 'Agregar Persona',
        route: `${urlFrontend.person.module}/${urlFrontend.person.personIndex}`,
        icons: 'person-add-outline',
        actived: false,
      },
      {
        name: 'Agregar Empleado',
        route: `${urlFrontend.employee.module}/${urlFrontend.employee.employeIndex}`,
        icons: 'people-outline',
        actived: false,
      },
    ],
  },
];

/*   {
    name: 'Ordenes de trabajo',
    route: ``,
    icons: `document-text-outline`,
    actived: false,
    childen: [
      {
        name: 'Hojas de Monitoreo',
        route: ``,
        icons: 'albums-outline',
        actived: false,
      },
      {
        name: 'Evidencia Fotográfica',
        route: ``,
        icons: 'image-outline',
        actived: false,
      },
    ],
  },
  {
    name: 'Monitoreo',
    route: ``,
    icons: `newspaper-outline`,
    actived: false,
    childen: [
      {
        name: 'Mapa de Estaciones',
        route: ``,
        icons: 'map-outline',
        actived: false,
      },
      {
        name: 'Puntos de Control',
        route: ``,
        icons: 'locate-outline',
        actived: false,
      },
      {
        name: 'Edificaciones',
        route: ``,
        icons: 'business-outline',
        actived: false,
      },
    ],
  },
  {
    name: 'Reportes',
    route: ``,
    icons: 'document.outline',
    actived: false,
    childen: [
      {
        name: 'Informes',
        route: ``,
        icons: 'clipboard-outline',
        actived: false,
      },
      {
        name: 'Certificaciones',
        route: ``,
        icons: 'bag-check-outline',
        actived: false,
      },
    ],
  },
  {
    name: 'Inventario',
    route: ``,
    icons: 'cube-outline',
    actived: false,
    childen: [
      { name: 'Artículos', route: ``, icons: 'cart-outline', actived: false },
      { name: 'Marcas', route: ``, icons: ``, actived: false },
      { name: 'Categoría', route: ``, icons: ``, actived: false },
      { name: 'Clasificaciones', route: ``, icons: ``, actived: false },
      { name: 'Características', route: ``, icons: ``, actived: false },
      { name: 'Combinaciones', route: ``, icons: ``, actived: false },
      { name: 'Bodegas', route: ``, icons: ``, actived: false },
      { name: 'Movimientos', route: ``, icons: ``, actived: false },
      { name: 'Fórmulas', route: ``, icons: ``, actived: false },
      { name: 'Generador QR', route: ``, icons: ``, actived: false },
    ],
  },
  {
    name: 'Clientes',
    route: ``,
    icons: ``,
    actived: false,
    childen: [
      { name: 'Lista de Clientes', route: ``, icons: ``, actived: false },
      {
        name: 'Puntos de implementación',
        route: ``,
        icons: ``,
        actived: false,
      },
      { name: 'Mantenimiento', route: ``, icons: ``, actived: false },
    ],
  },
  {
    name: 'Contabilidad',
    route: ``,
    icons: ``,
    actived: false,
    childen: [
      { name: 'Frecuencias', route: ``, icons: ``, actived: false },
      { name: 'Catálogo de Impuestos', route: ``, icons: ``, actived: false },
      { name: 'Entidades Bancarias', route: ``, icons: ``, actived: false },
      { name: 'Métodos de Pago', route: ``, icons: ``, actived: false },
      { name: 'Datos Bancarios', route: ``, icons: ``, actived: false },
    ],
  },
  {
    name: 'Recursos Humanos',
    route: ``,
    icons: ``,
    actived: false,
    childen: [
      { name: 'Empleados', route: ``, icons: ``, actived: false },
      { name: 'Proveedores', route: ``, icons: ``, actived: false },
      { name: 'Mantenimiento', route: ``, icons: ``, actived: false },
    ],
  }, */
