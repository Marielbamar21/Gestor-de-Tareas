
import task from './task.js';


let lst = {};

export const takslist  = {

    

    createTask: (des) => {
        const tas = new task(des);
        lst = {...lst, tas};
        return lst;
    
    }

}