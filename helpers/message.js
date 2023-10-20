import { promises } from 'dns';
import { resolve } from 'path';
import readline from 'readline';

// Menu
export const message = () => {

    return new Promise(resolve => {
        //Header
        console.clear(); 
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
        
        rl.question('Seleccione una opcion', (opt) => {
            readline.close;
            resolve (opt)
            })
        

});


}

// Pause after the process has been executed

export const pausa = () => {
    return new Promise (resolve =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        rl.question('Presione Enter para continuar', (opt) => {
            readline.close;
            resolve (opt)
            })

    })

}

