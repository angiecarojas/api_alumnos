// Copyright 2017 Google LLC
//
// Licenciado bajo la Licencia Apache, Versión 2.0 (la "Licencia");
// no puede usar este archivo excepto en cumplimiento con la Licencia.
// Puede obtener una copia de la Licencia en
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// A menos que lo exija la ley aplicable o se acuerde por escrito, el software
// distribuido bajo la Licencia se distribuye "TAL CUAL",
// SIN GARANTÍAS O CONDICIONES DE NINGÚN TIPO, ya sea expresa o implícita.
// Consulte la Licencia para ver los permisos específicos de idioma y
// limitaciones bajo la Licencia.

'uso estricto' ;

// [START gae_node_request_example]
const  express  =  require ( 'express' ) ;

 aplicación  const =  express ( ) ;

aplicación . get ( '/' ,  ( req ,  res )  =>  {
  res . estado ( 200 ) . enviar ( '¡Hola, mundo!' ) . fin ( ) ;
} ) ;

// Inicia el servidor
const  PORT  =  proceso . env . PUERTO  ||  8080 ;
aplicación . escuchar ( PUERTO ,  ( )  =>  {
  consola . log ( `Aplicación escuchando en el puerto $ { PORT } ` ) ;
  consola . log ( 'Presione Ctrl + C para salir.' ) ;
} ) ;
// [END gae_node_request_example]

módulo . exportaciones  =  aplicación ;
