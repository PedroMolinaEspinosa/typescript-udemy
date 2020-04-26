(() => {

    const miFuncion = function (a: string) {
        return a;
    }
    const functionF = (a: string) => a;

    const sumarN = function (a: number, b: number) {
        return a + b;
    }
    const funcionS = (a: number, b: number) => a + b;
    console.log(sumarN(4, 7));

    const hulk = {
        nombre: 'Hulk',
        smash() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!`);
            }, 1000);


        }
    }
    hulk.smash();


})();
