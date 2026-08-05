export const formatDate = (date) => {
    return `Due: ${date.toLocaleDateString()}`;
};

export const validateTask = (task = {}) => {
    const {title, dueDate} = task;
    if (title && dueDate) {
        return true;
    } else {
        return false;
    }
};

export const mergeTaskUpdate = (original, ...updates) => {
    let task = { ...original };

    for (let update of updates) {
        task = { ...task, ...update };
    }

    return task;
};

export class TaskValidationError extends Error {
    constructor(message){
        super(message);
        this.name="TaskValidationError";
    }
}

export const createTask = (taskData) => {
    if(!validateTask(taskData)){
        throw new TaskValidationError("Invalid task data");
    }
    
    return { id: Date.now(), completed: false, ...taskData};
}

export const tasks = [
    {
        id: 1,
        title: "Homework",
        dueDate: "2026-07-22",
        completed: false
    },
    {
        id: 2,
        title: "Old Task",
        dueDate: "2026-08-25",
        completed: true
    }
];
