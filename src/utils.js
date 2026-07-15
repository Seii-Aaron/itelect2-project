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
