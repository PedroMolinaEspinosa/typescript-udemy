(function () {

    function activar(quien: string, momento?: string, objeto: string = 'cabrón') {
        if (momento) {
            console.log(`${quien} activó el muy ${objeto} porque ${momento}`);
        } else {
            console.log(`${quien} activó el muy ${objeto}`);
        }

    }

    activar("Gordo", "de mierda");
})();
