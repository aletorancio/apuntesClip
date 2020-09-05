   // Variables

   let max = 7,
       min = 1,
       intentos = 3,
       numero_aleatorio = Math.round(Math.random() * (max - min) + min),
       numero;

   //Esta funcion muestra en pantalla que ganaste

   ganaste = () => {
       $('.bulma').removeClass("bulma").addClass("apagar");
       $('.win').removeClass("win").addClass("mostrar");
   };

   //Esta funcion muestra pista de MAYOR

   mayor = () => {
       alert(`PISTA: ES MAYOR. Te quedan ${ intentos } intentos`);
   };
   //Esta funcion muestra pista de MENOR

   menor = () => {
       alert(`PISTA: ES MENOR. Te quedan ${ intentos } intentos`);
   };

   //Esta funcion muestra que PERDISTE

   perdio = () => {
       $('.bulma').removeClass("bulma").addClass("apagar");
       $('.yamcha').removeClass("yamcha").addClass("perdio ");
   };

   //Esta funcion une toda la logica
   jugarAhora = () => {
       console.log(numero_aleatorio);

       //Logica
       for (let i = 0; i < 3; i++) {
           intentos--;
           numero = parseInt(prompt('Escribe el numero que pensaste'));
           if (numero >= min &&
               numero <= max) {
               if (intentos == 0 &&
                   numero != numero_aleatorio) {
                   perdio();
                   let texto = document.querySelector('.perdistext');
                   texto.innerHTML = `El numero era ${ numero_aleatorio }. Actualiza la pagina para volver a jugar.`;
                   break;
               }
               if (numero < numero_aleatorio) {
                   mayor();
               } else if (numero > numero_aleatorio) {
                   menor();
               } else {
                   ganaste();
                   break;
               }
           } else {
               alert(`Escribe un numero del 1 a 7`);
               break;
           }
       }
   };