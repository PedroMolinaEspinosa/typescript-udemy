(function () {

    function getEdad() {
        return edad - 8;
    }

    const nombre = "Pedro";
    const apellido = "Molina";
    const edad = 33;
    //const salida = nombre + " " + apellido + " ( " + edad + " ) ";
    const salida = `${nombre} ${apellido} ( ${getEdad()} ) `;
    console.log(salida);
})();
