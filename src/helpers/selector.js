import service from "../service/service.js";


export const  options = [
    {
                            type: 'list',
                            name : 'option',
                            message : ' Seleccone una opcion',
                            choices: [
                                {
                                    value: 1,
                                    name: '1. Crear Tarea'
                                },
                                {
                                    value: 2,
                                    name:'2. Listar Tareas'
                                },
                                {
                                    value: 3,
                                    name:'3. Listar tareas completadas'
                                },
                                {
                                    value: 4,
                                    name:'4. Listar tareas pendientes'
                                },
                                {
                                    value: 5,
                                    name:'5. Completar tareas'
                                },
                                {
                                    value: 6,
                                    name:'6. Borrar Tareas'
                                },
                                {
                                    value: 0,
                                    name:'0. Salir'
                                }
                            ]
    }
];

export const pendingTasks = () =>
{
    let lst = service.getList();
    if(!lst)
    {
        console.log('No hay elementos en la bd');
        return null;
    }
    let list = lst.filter((item) => !item.completed);
    let descriptions = list.map((item) =>({     value: item.id,
                                                name: `${item.description} : Pendiente`
                                        }));
                                    
    
    return [{
                            type: 'list',
                            name : 'taskPending',
                            message : ' Seleccone una opcion',
                            choices: descriptions
                        }];
};

export const alltaks = () =>
{
    let lst = service.getList();
    if(!lst)
    {
        console.log('No hay elementos en la bd');
        return null;
    }
    let descriptions = lst.map((item) => {return !item.completed? {     value: item.id,
                                                                        name: `${item.description} : Pendiente`
                                                                  }:
                                                                  {     value: item.id,
                                                                        name: `${item.description} : Completada`
                                                                  }
                                        });    

                                
    return [{
                            type: 'list',
                            name : 'task',
                            message : ' Seleccone una opcion',
                            choices: descriptions
                        }];
                    };