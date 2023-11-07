
import { task } from '../models/task.js';
import data from '../service/service.js';


export const controlertasks = {
    getlist: ()=>
    {
        let lst = data.getList();
        if(!lst)
        {
            console.log('No existe elementos')
        }
        for(let i in lst){
            if(!lst[i].completed)
            {
                console.log(`${lst[i].description}: Pendiente ${i}`)
            }
            else
            {
                console.log(`${lst[i].description}: completado`)
            }
            }
    },

    createTask : (des) => 
    
    {
        let lst = data.getList();
        console.log(lst,'antes del if')
        if(!lst)
        {
            console.log('if')
            const tas = new task(des);
            data.setList([tas]);
            return tas;
        }
        else 
        {
            console.log('else')
            const tas = new task(des);
            lst.push(tas);
            data.setList(lst);
            return tas;
        }
        

    },
    completedTasks : () =>
    {
        let lst = data.getList();
        if(!lst)
        {
            console.log('no hay elementos en la lista')
        }
        else
        {
            let list =lst.filter((item) => item.completed);
            if(!list || list.length == 0) 
            {
                console.log('No hay tareas completadas')
            }
            else
            {
            for(let i in list)
            {
                console.log(`${list[i].description} : completada`)
            }
            }
        
    }

    },

    pendingTasks : () => 
    {
    let lst = data.getList();
    if(!lst)
    {
        console.log('no hay elementos en la lista')
    }
    else{
        let list = lst.filter((item) => !item.completed);
        if( list.length == 0) {
            console.log('No hay tareas pendientes')
        }
        else{
        for(let i in list){
            console.log(`${list[i].description} : pendiente`)
        }
    }
}


    },

    completed : (id) => 
    {
        let lst = data.getList();
        if(!lst){
            console.log('no hay elementos en la lista');
        }
        else
        {
            let index = lst.findIndex(item => item.id == id );
            if(index == -1)
            { 
                return'Tarea no encontrada';
            }
            else 
            {
                lst[index].completed = true;
                data.setList(lst);
                return 'Tarea Completada';
            }
        }
        

    },
    deletetask : (id) =>{
        let lst = data.getList();
        lst.splice(lst.findIndex(item => item.id == id ), 1);
        data.setList(lst);
        return 'Operacion realizada con exito'
    }
}