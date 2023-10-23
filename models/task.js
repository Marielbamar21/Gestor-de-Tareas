import { v4 as uuidv4 } from 'uuid';


export default class task {

    constructor (description){

        this.id = uuidv4();
        this.description = description;
        this.createdate = new Date();
        this.finishdate = finishdate;
        this.finished = finished;

    }
}