import fs from 'fs'

export const saveinfo = {
    
    setList: (data) => 
    {
        fs.writeFileSync('./components/db/data.json',JSON.stringify(data));  

    },

    getList: () =>
    {
        let validation =fs.existsSync('./components/db/data.json');
        if(!validation)
        {
            return false;
        }
        else
        {
            let lst = fs.readFileSync('./components/db/data.json','utf8');
            return JSON.parse(lst);
        }
        
        

    }
}