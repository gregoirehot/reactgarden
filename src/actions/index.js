// Actions
export const NEW_TODO_CHANGED = 'NEW_TODO_CHANGED';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO_DONE = 'TOGGLE_TODO_DONE';
export const REMOVE_TODO = 'REMOVE_TODO';
export const ALL_DONE = 'ALL_DONE';

export const actions = {
    newTodoChanged(newTodo) {
        return {
            type: NEW_TODO_CHANGED,
            newTodo
        };
    },
    addTodo(todo) {
        return {
            type: ADD_TODO,
            todo
        };
    },
    toggleTodoDone(toggle) {
        return {
            type: TOGGLE_TODO_DONE,
            toggle
        };
    },
    removeTodo(index) {
        return {
            type: REMOVE_TODO,
            index
        };
    },
    allDone() {
        return {
            type: ALL_DONE
        };
    }
}