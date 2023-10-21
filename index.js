import {menu, pausa} from './components/menu.js'
//import {pausa} from './helpers/message.js'
console.clear();

const main = async() => {
    let res = '';
    do{
        
        res = await menu();
        console.log(res);
        await pausa()
    }while( res !== '0')
    
}
main();