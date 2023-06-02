import React from "react";

const TaskContext = React.createContext({
    // Estados y funciones que modifiquen el estado del contexto
    tasks: [],
    addTask: (item) => {},
    deleteTask: (id) => {},
    completeTask: (id) => {}
});

export default TaskContext;