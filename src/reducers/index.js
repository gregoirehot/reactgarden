import { NEW_TODO_CHANGED, ADD_TODO, TOGGLE_TODO_DONE, REMOVE_TODO, ALL_DONE } from '../actions';

// initialState
const initialState = {
    message: 'Hello World !!',
    newTodo: '',
    todos: [{
        title: 'Learn React',
        done: false
    }, {
        title: 'Learn JSX',
        done: false
    }]
};

// Reducer
export function reducer(state = initialState, action) {
    switch (action.type) {
        case NEW_TODO_CHANGED: {
            return {
                ...state,
                newTodo: action.newTodo
            };
        }
        case ADD_TODO: {
            return {
                ...state,
                todos: [...state.todos, action.todo]
            };
        }
        case TOGGLE_TODO_DONE: {
            const todos = [...state.todos]; // copy the array
            todos[action.toggle.index] = {
                ...todos[action.toggle.index],
                done: action.toggle.checked // update done property on copied todo
            };
            return {
                ...state,
                todos
            };
        }
        case REMOVE_TODO: {
            const todos = [...state.todos]; // copy the array
            todos.splice(action.index, 1);
            return {
                ...state,
                todos
            };
        }
        case ALL_DONE: {
            const todos = state.todos.map(todo => {
                return {
                    title: todo.title, // can also do ...todo
                    done: true
                };
            });
            return {
                ...state,
                todos
            };
        }
        default:
            return state;
    }
}




