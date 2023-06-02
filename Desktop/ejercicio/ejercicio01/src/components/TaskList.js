import TaskContext from '../store/Taskcontext';
import { useContext } from 'react';

const TaskList = () => {
    const ctxTask = useContext(TaskContext);
    //const [taskState, setTaskState] = useState("");

    const deleteHandler = (e) =>{
        const id = e.id
        ctxTask.deleteTask(id)
        console.log('deleteado')
    }


    return (
        <div>
        <ul>
            {ctxTask.tasks.map((item) => (
                <>
                <li key={item.id}>
                    {item.name}
                </li>
                <input type='checkbox'/>
                <button onClick={deleteHandler}>DElETE</button>
                </>
            ))}
            
        </ul>
        </div>
    );
};


export default TaskList;