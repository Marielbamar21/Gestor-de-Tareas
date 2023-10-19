// import createDebug from 'debug';
import readline from 'readline';


// const debug = createDebug('message');


export const message = () => {

    //Header
console.log('==================================');
console.log('        Gestion de Tareas         ');
console.log('==================================');


    //Options
console.log('1. Crear Tarea');
console.log('2. Listar Tareas');
console.log('3. Listar tareas completadas');
console.log('4. Listar tareas pendientes');
console.log('5. Completar Tareas');
console.log('6. Borrar Tareas');
console.log('7. Salir');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Seleccione una opcion', (opc) => {
    console.log({opc})
    readline.close();

});


}

export const pausa = () => {

}

