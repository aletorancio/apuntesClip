jugarAhora = () => {

    let max = 7,
        min = 1,
        cant_intentos = 3,
        acerto = false,
        numero_aleatorio = Math.round(Math.random() * (max - min) + min),
        numero;
    console.log(numero_aleatorio);
    numero = prompt('Escribe el numero que pensaste');

    if (numero == numero_aleatorio) {
        console.log('Ganaste');
    }

}