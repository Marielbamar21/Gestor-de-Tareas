import inquirer from "inquirer";
import {questions} from '../helpers/arrayquestions.js';
//import task from "../models/task.js";

export const interartion =    {
        
        menu :  async() => {
                 //Header
                console.clear(); 
                console.log('==================================');
                console.log('        Gestion de Tareas         ');
                console.log('==================================');
        
                let {option} = await inquirer.prompt(questions);
                console.log(option);
                return option;
        },

        pausa : async() => {
        
                let {option} = await inquirer.prompt([{
                type: 'input',
                name : 'option',
                message : ' Presione ENTER para continuar'}]);
                console.log(option);
                return option;
        },

        readtask : async() => {
                
                console.clear(); 
                let tsk =[{
                        type: 'input',
                        name: 'task',
                        message : 'Tarea: ',
                        validate (value) {
                                if(value.length === 0)
                                {
                                        return 'Ingrese un valor para continuar';
                                }
                                return true;
                        }
                        


                }];
                const { task } = await inquirer.prompt(tsk);

                return task
        }
}
