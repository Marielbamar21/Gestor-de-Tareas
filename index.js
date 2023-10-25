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
            takslist.createTask(task);
            break;

            case 2 :
                let tasks = takslist.getlist()
                if(tasks ===  false)
                {
                    console.log('El listado no tiene elementos');
                }
                else
                {
                    
                    for(const object in tasks)
                    {
                        console.log(tasks[object]);
                    }
                    
                }
            break;

        }
        await interartion.pausa()
    }while( res !== '0')
    
}
main();