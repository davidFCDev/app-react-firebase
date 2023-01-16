import React, { useEffect, useState } from 'react'
import { addNewTask, getTasks, updateTask, deleteTask } from '../firebase/taskController';
import { ImPencil2 } from 'react-icons/im';
import { RiDeleteBin6Line} from 'react-icons/ri';


const task = {
    title: 'Éste es el título',
    description: 'Ésta es la descripción'
}

export const TaskList = () => {
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const [task, setTask] = useState({ title: "", description: "" });
    const [tasks, setTasks] = useState([]);
    const [mode, setMode] = useState('add');

    const createNewTask = async () => {
        await addNewTask(task);
        setTask({ title:"", description:"" });
        initializeTasks();
    };

    const initializeTasks = () => {
    getTasks()
        .then((t) => setTasks([...t]))
        .catch((e) => console.error(e));
    };

    const editTask = (id) => {
        setMode(('update'));
        const taskToEdit = tasks.find(t => t.id === id);
        setTask({ ...taskToEdit});
    };

    const updateExistingTask = async () => {
        await updateTask(task);
        setTask({ title:"", description:"" });
        initializeTasks();
        setMode('add');
    };

    const removeTask = async (id) => {
        await deleteTask(id);
        initializeTasks();
    }

    useEffect(() => {
        initializeTasks();
    }, []);
    
    return (
        <div>
            <h1 className='text-2xl font-semibold text-emerald-800 ml-1'>Lista de Tareas</h1>
            <div className='flex flex-col gap-3'>
                <h2 className='italic ml-1'>Introduce una nueva tarea</h2>
                <input 
                    className='border bg-slate-50 border-gray-200 rounded py-1 px-2 outline-none placeholder-slate-400 w-80' 
                    placeholder='Título'
                    type='text' 
                    value={task.title}
                    onChange={e => setTask({...task, title: e.target.value})}
                />
                <textarea 
                    className='border bg-slate-50 border-gray-200 rounded py-1 px-2 outline-none placeholder-slate-400 w-80'
                    rows='3'
                    placeholder='Descripción'
                    type='text' 
                    value={task.description}
                    onChange={e => setTask({...task, description: e.target.value})}
                />
                <button 
                    className='bg-emerald-300 rounded-lg shadow py-1 text-gray-800 font-semibold hover:bg-emerald-200 w-80'
                    onClick={() => mode === 'add' ? createNewTask() : updateExistingTask()}
                    >
                    {mode === 'add' ? 'Añadir' : 'Actualizar'}
                </button>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-4'>
                {tasks.map((task) => (
                    <div 
                        key={task.id}
                        className='rounded-lg border border-emerald-300 p-4 flex flex-col gap-2'>
                        <h1 className='font-semibold'>{task.title}</h1>
                        <div className='border-t border-emerald-300'></div>
                        <p>{task.description}</p>
                        <div className='flex justify-end gap-3'>
                            <button onClick={() => editTask(task.id)}><ImPencil2/></button>
                            <button 
                                onClick={() => window.confirm('¿Seguro que quieres eliminar esta tarea?') 
                                && removeTask(task.id)}
                            >
                                <RiDeleteBin6Line className='text-xl text-red-800'/>
                            </button>
                        </div>
                    </div>                  
                ))}
                </div>
            </div>
        </div>
    )
}
