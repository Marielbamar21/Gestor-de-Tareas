import { interartion} from './components/interaction.js'
import { takslist } from './models/tasklist.js';
console.clear();

const main = async() => {
    let res = '';
    do{
        
        res = await interartion.menu();
        switch(res){
            case 1 : 
            let task = await interartion.readtask();
            console.log(task);
            takslist.createTask(task);

            break;

        }
        await interartion.pausa()
    }while( res !== '0')
    
}
main();