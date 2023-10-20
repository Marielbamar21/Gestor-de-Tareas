import {pausa, message} from './helpers/message.js';

console.clear();

const main = async() => {
    let opt = '';
    do{
        opt = await message(); // Menu

        //option config
        if (opt == '1')
        {
            console.log('Hola 1');
        }
        else
        {
            console.log('otros');
        }


        await pausa();// Pausa
    }while( opt !== '0')
    
}
main();