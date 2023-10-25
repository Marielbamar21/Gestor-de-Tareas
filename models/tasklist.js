
import { task } from './task.js';
import { saveinfo } from '../components/saveinfo.js'
import fs from 'fs';


export const takslist = {

    getlist: ()=>
    {

        let lst = saveinfo.getList();
        
        if( lst.length !== 0 )
        {
            return lst;
        }
        else
        {
            return false;
        }
    },

    createTask : (des) => 
    {
        let list = [];
        let lst =  saveinfo.getList();

        if(!lst)
        {
            const tas = new task(des);
            list.push(tas);
            saveinfo.setList(list);
            return list;
        }
        else 
        {
            const tas = new task(des);
            lst.push(tas);
            saveinfo.setList(lst);
            return lst;
        }
        

    },

    complitedTask : () =>{

    }

}