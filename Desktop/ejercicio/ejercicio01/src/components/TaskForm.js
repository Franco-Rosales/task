import {useState, useContext} from 'react';
import TaskContext from '../store/Taskcontext';

const TaskForm = () => {
    const ctxTask = useContext(TaskContext);
    const [name, setName] = useState('');

    const changeHandler = (event) => {
        setName(event.target.value)
    };

    const handlerSubmit = (event) => {
        event.preventDefault()
        if (name.trim().length > 3) {
            ctxTask.addTask(name)
            setName('')
        }
    };

    return (
    <form onSubmit={handlerSubmit}>
        <input type="text" name="nombre" value={name} onChange={changeHandler}/>
        <button type="submit">Send</button>
        <button type="delete">delete</button>
    </form>
    );
};


export default TaskForm;