import fs from 'fs'

export default {
    
    setList: (data) => 
    {
        fs.writeFileSync('./src/db/data.json',JSON.stringify(data));  

    },

    getList: () =>
    {
        let validation =fs.existsSync('./src/db/data.json'); 
        if(!validation)
        {
            return false;
        }
        else
        {
            let lst = fs.readFileSync('./src/db/data.json','utf8');
            return JSON.parse(lst);
        }
        
        

    }
}