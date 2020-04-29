
(() => {

    const sumar = (a: number, b: number): number => a + b;
    const nombre = (): string => 'Hola fernando';
    const obtenerSalario = (): Promise<string> => {
        return new Promise((resolve, reject) => {
            resolve('Pepe');
        });
    }
    obtenerSalario().then(a => console.log(a.toLocaleUpperCase()));

})();
