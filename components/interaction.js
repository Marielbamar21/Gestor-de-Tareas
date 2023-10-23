import inquirer from "inquirer";
import {questions} from '../helpers/arrayquestions.js';
import task from "../models/task.js";

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

        readtask : async(des) => {
                let tsk =[{
                        type: 'input',
                        name: 'task',
                        message : des,
                        required : true


                }];
                const { task } = inquirer.prompt(tsk);

                return task
        }
}
