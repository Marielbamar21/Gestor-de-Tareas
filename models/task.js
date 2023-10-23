import { v4 as uuidv4 } from 'uuid';


export class task {
    

    constructor (description){

        this.id = uuidv4();
        this.description = description;
        this.createdate = new Date();
        this.finished = false;

    }
}