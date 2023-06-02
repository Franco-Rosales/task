import TaskContext from './Taskcontext';
import { useState } from 'react';





const TaskProvider = (props) => {
    const [Tasks, setTasks] = useState([]);

    const addTask = (name) => {
        setTasks([...Tasks, {id:Date.now(), name:name, completed:false}]);
    };

    const deleteTask = (id) => {
        setTasks(Tasks.filter(Task => Task.id !== id) );

    };

    const completeTask = (id) => {
        setTasks(Tasks.map(Task => {
            if (Task.id === id) {
                return {
                    ...Task, completed: !Task.completed
                }
            }
            return Task;
        }));
    };

    const taskContext = {
        tasks: Tasks,
        addTask: addTask,
        deleteTask: deleteTask,
        completeTask: completeTask
    };
    return (
        <TaskContext.Provider value={taskContext}>
            {props.children}
        </TaskContext.Provider>
    )
};

export default TaskProvider;