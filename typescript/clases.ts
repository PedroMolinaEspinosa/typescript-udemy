
(() => {


    class Avenger {


        constructor(public nombre: string, public equipo: string, public puedePelear: boolean = true, public peleasGanadas: number = 0, public nombreReal?: string, ) {

        }
    }


    const antman: Avenger = new Avenger('Antman', 'Capitán América', true, 3, 'pepe');
    console.log(antman);
})();
