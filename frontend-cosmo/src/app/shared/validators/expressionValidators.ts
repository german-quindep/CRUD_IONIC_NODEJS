export const expressionValidation = {
  soloLetrasAcentosEspaciosSinNumeros: /^[^$&{}|<>]*$/, //ACEPTA TODO MENOS ESOS CARACTERES
  contrasena: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
  cedulaTelefono: /[0-9]{2}[0-9]+$/,
  soloNumeros: /[0-9]*$/,

};
