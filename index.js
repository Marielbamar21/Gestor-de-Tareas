import { interartion} from './src/components/interaction.js'
import { controlertasks } from './src/controller/controllerTasks.js';
console.clear();

const main = async() => {
    let res = '';
    do{
        
        res = await interartion.menu();
        switch(res){
            case 1 : 
                let task = await interartion.readtask();
                controlertasks.createTask(task);
            break;

            case 2 :
                controlertasks.getlist();
            break;
            case 3: controlertasks.completedTasks();
                break;

            case 4: 
                let pending = controlertasks.pendingTasks();
                break;
            case 5 :
                let tsk = await interartion.selectortasks();
                let confirm = await interartion.confirm();
                if(confirm == true)
                {
                    
                    
                    let con = controlertasks.completed(tsk);
                    console.log(con);

                }
                else
                {
                    res = await interartion.menu();
                }
                
            break;
            case 6:  controlertasks.holis()
                /*let id = await interartion.selectortasks();
                let confir = await interartion.confirm();
                if(confir == true)
                {
                    
                    
                    let con = controlertasks.deletetask(id);
                    console.log(con);

                }
                else
                {
                    res = await interartion.menu();
                }*/
                break;


            

        }
        await interartion.pausa()
    }while( res !== 0)
    
}
main();