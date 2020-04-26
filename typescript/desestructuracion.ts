
(() => {
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan America',
        poder: 'droga'
    }

    const extraer = ({ nombre, poder }: any) => {


        //const { nombre, clave, poder } = avenger;
        console.log(nombre);
        console.log(poder);

    }

    // extraer(avenger);

    const avengers: string[] = ['thor', 'iron man', 'spiderman'];
    const [, , spiderman] = avengers;
    const extraerArr = ([thor, ironman, spiderman]: string[]) => {
        console.log(thor);
        console.log(ironman);
        console.log(spiderman);
    }


    extraerArr(avengers);


})();
