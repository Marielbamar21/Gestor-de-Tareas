import inquirer from "inquirer";
import {questions} from '../helpers/arrayquestions.js';

export const menu =    async() => {
        //Header
        console.clear(); 
        console.log('==================================');
        console.log('        Gestion de Tareas         ');
        console.log('==================================');
        
        let {option} = await inquirer.prompt(questions);
        console.log(option);
        return option;
};

export const pausa = async() => {
        
        let {option} = await inquirer.prompt([{
            type: 'input',
            name : 'option',
            message : ' Presione ENTER para continuar'}]);
        console.log(option);
        return option;
}

