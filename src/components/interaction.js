import inquirer from "inquirer";
import {options, tsks} from '../helpers/selector.js';

export const interartion =    {
        
        menu :  async() => {
                 //Header
                console.clear(); 
                console.log('==================================');
                console.log('        Gestion de Tareas         ');
                console.log('==================================');
        
                let {option} = await inquirer.prompt(options);
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
        },

        selectortasks :async() => {
                let {task} = await inquirer.prompt(tsks());
                console.log(task);
                return task;
        },

        confirm: async() => {
                let operation =[{
                        type: 'confirm',
                        name: 'op',
                        message : 'Esta seguro que desea realizar esta operation: '
                }];
                let {op} = await inquirer.prompt(operation);
                console.log(operation);
                return op;

        }


}
